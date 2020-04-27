let { Model, snakeCaseMappers } = require('objection');

class Video extends Model {
  static get columnNameMappers() {
    /*
      In JavaScript we want camel case (e.g., createdAt), but
      in SQL we want snake case (e.g., created_at).

      snakeCaseMappers tells Objection to translate between
      the two.
    */
    return snakeCaseMappers();
  }

  static get tableName() {
    return 'videos';
  }

  static get relationMappings() {
    let User = require('./User');
    let messageInfo = require('./videoInfo');

    return {

      videoCombineVideoInfo: {
        relation: Model.HasManyRelation,
        modelClass: videoInfo,
        join: {
          from: 'videos.id',
          to: 'videoInfo.video_id'
        }
      },
      userInfo: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'videos.user_id',
          to: 'users.id'
        }
      },
      messageInfoTwo: {
        relation: Model.HasManyRelation,
        modelClass: videoInfo,
        join: {
          from: 'videos.user_id',
          to: 'videoInfo.user_id'
        }
      },
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'videoLink',
        'hashtag',
      ],
      properties: {
        id: {type:'integer'},
        userId: { type: 'integer' },
        videoLink: {type:'string'},
        category: {type: 'string'},
        hashtag: {type:'string'},
        caption: { type: 'string', minLength: 1 }
      }
    };
  }
}

module.exports = Video;
