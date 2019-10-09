
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 12, make: 'Ford', model: 'Mustang', mileage: 20000, type: 'automatic', status: 'salvaged' },
      ]);
    });
};
