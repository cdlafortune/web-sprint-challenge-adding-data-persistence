
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "Get a new job",
          description: "",
          completed: false
        },
        {
          name: "Finish Lambda School",
          description: "",
          completed: false
        }
      ]);
    });
};
