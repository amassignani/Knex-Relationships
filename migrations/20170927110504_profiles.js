// Created this table called profiles with a migration and then changed the name to profiles and then copy and pasted the code from other table migration. 
// Changed this code to be the different names for columns in this table (e.g. id, user_id, picture and url)
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.integer('id').primary()
    table.string('url')
    table.string('picture')
    table.increments('user_id')
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
