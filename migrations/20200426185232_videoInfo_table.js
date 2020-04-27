
exports.up = function(knex) {
  return knex.schema.createTable('videoInfo', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned();
    table.foreign("user_id").references('id').inTable("users");
    table.text('userName');
    table.integer("video_id").unsigned();
    table.foreign("video_id").references('id').inTable("videos");
    table.text('comments');
    table.integer('likes');
  });

};

exports.down = function(knex) {
  return knex.schema.dropTable('videoInfo');

};
