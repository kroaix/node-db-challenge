exports.seed = function(knex) {
  return knex("projects").insert([
    {
      project_name: "Finish Sprint",
      project_description: "Complete MVP!",
      project_completed: false
    },
    {
      project_name: "Get Some Rest",
      project_description: "Sprint was hard, time to relax.",
      project_completed: false
    },
    {
      project_name: "Have a Happy Holiday",
      project_description: "Thanksgiving means food! Yum.",
      project_completed: false
    }
  ]);
};