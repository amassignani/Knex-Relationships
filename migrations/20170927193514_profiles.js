
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('profiles', function (table) {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('url')
    table.string('picture')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
