exports.up = function(knex) {
  return knex.schema.createTable('videos', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned();
    table.foreign("user_id").references('id').inTable("users")
    table.text('video_link').notNullable();
    table.text('category').notNullable();
    table.text('caption').unique().notNullable();
    table.text('hashtag').notNullable();
  });

};

exports.down = function(knex) {
  return knex.schema.dropTable('videos');

};
