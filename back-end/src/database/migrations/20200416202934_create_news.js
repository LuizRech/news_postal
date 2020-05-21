exports.up = function(knex) {
    return knex.schema.createTable('news', function(table){
        table.increments('id');
        table.string('title', 100).notNullable();
        table.string('resume', 150).notNullable();
        table.string('new_content', 2500).notNullable();
        table.string('author', 25).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("news");
};