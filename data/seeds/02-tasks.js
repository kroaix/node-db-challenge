
exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      id: 1,
      task_description: "Follow Instructions",
      task_notes: "Carefully read the ReadMe file!",
      task_completed: true,
      project_id: 1
    },
    {
      id: 2,
      task_description: "Plan Tables Using DbDesigner.net",
      task_notes: "This will really make things easier.",
      task_completed: true,
      project_id: 1
    },
    {
      id: 3,
      task_description: "Test success using SQLite and Postman",
      task_notes: "If everything is working.. time to submit!",
      task_completed: false,
      project_id: 1
    },
    {
      id: 4,
      task_description: "Play a Game",
      task_notes: "Finally, time for some Pokemon.",
      task_completed: false,
      project_id: 2
    },
    {
      id: 5,
      task_description: "Watch Some TV",
      task_notes: "Something to help wind your mind down after the Sprint.",
      task_completed: false,
      project_id: 2
    },
    {
      id: 6,
      task_description: "SLEEEP",
      task_notes: "Time to rest! Finally.",
      task_completed: false,
      project_id: 2
    },
    {
      id: 7,
      task_description: "Make Plans With Family",
      task_notes: "It has been a long time since the last visit.",
      task_completed: false,
      project_id: 3
    },
    {
      id: 8,
      task_description: "Buy some food and prepare it",
      task_notes: "It is nice to contribute.",
      task_completed: false,
      project_id: 3
    },
    {
      id: 9,
      task_description: "Visit Family - Enjoy The Feast!",
      task_notes: "Time to eat!!!",
      task_completed: false,
      project_id: 3
    }
  ]);
};
