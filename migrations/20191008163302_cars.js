
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(tbl) {
        // a Primary Key, named 'id' that is and integer and
        // auto-increments
        tbl.increments();
        tbl.integer('vin', 25).notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 25).notNullable();
        tbl.integer('mileage', 25 ).notNullable();
        tbl.string('type', 20);
        tbl.string('status');

      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
