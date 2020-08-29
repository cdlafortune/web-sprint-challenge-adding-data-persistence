
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          description: "Apply t0 50 jobs",
          notes: "10 / week",
          completed: false
        },
        {
          project_id: 1,
          description: "300 connections on LinkedIn",
          notes: "",
          completed: false
        },
        {
          project_id: 2,
          description: "Pass sprint challenge",
          notes: "",
          completed: false
        },
      ]);
    });
};
