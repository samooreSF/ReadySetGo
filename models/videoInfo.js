let { Model, snakeCaseMappers} = require('objection');

class videoInfo extends Model {
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
    return 'videoInfo';
  }

  static get relationMappings() {
    let Message = require('./videos');
    let User = require('./User')

    return {
      videoCombineVideoInfo: {
        relation: Model.BelongsToOneRelation,
        modelClass: Video,
        join: {
          from: 'videoInfo.video_id',
          to: 'videos.id'
        }
      },
      userCombineVideoInfo: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'videoInfo.user_id',
          to: 'users.id'
        }
      }

      }
    }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: {type:'integer'},
        userId: { type: 'integer' },
        videoId: {type: 'integer'},
        userName: {type: 'string'},
        comments: {type:'stringe'},
        likes: {type:'integer'},
      }
    };
  }
}

module.exports = videoInfo;
