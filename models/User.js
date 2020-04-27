let { Model, snakeCaseMappers } = require('objection');
let Password = require('objection-password')();

class User extends Password(Model) {
  static get tableName() {
    return 'users';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
  static get relationMappings() {
    let video = require('./videos');
    let videoInfo = require('./videoInfo')
    return {
      userInfo: {
        relation: Model.HasManyRelation,
        modelClass: Video,
        join: {
          from: 'users.id',
          to: 'videos.user_id'
        }
      },
      user: {
        relation:Model.HasOneThroughRelation,
        modelClass: Video,
        join: {
          from: 'users.user_name',
          through: {
            from: 'users.users_id',
            to: 'videos.user_id'
          },
          to: 'videos.user_name'
        }
      },
      VideoRelation: {
        relation:Model.ManyToManyRelation,
        modelClass: Video,
        join: {
          from: 'users.id',
          through: {
            from: 'videoInfo.user_id',
            to: 'videoInfo.message_id',
          to: 'videos.id'}
        }
      },
      userCombineVideoInfo: {
        relation: Model.HasManyRelation,
        modelClass: videoInfo,
        join: {
          from: 'users_id',
          to: 'videoInfo.user_id'
        }
      }
    }

  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userName','firstName','lastName','email', 'password'],

      properties: {
        id: { type: 'integer' },
        userName: {type: 'string'},
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
      },
    };
  }
}

module.exports = User;
