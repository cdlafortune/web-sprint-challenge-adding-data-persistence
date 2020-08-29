
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: "LinkedIn",
          description: "Connect with recruiters, find jobs"
        },
        {
          name: "FlexJobs",
          description: "Job board for remote work"
        },
        {
          name: "Sprint retro",
          description: "Don't forget to turn it in on time"
        },
        {
          name: "Google",
          description: "Search for jobs, or anything really"
        },
      ]);
    });
};
