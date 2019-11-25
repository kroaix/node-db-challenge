
exports.seed = function(knex) {
  return knex("resources").insert([
    {
      id: 1,
      resource_name: "Lambda School Training Kit",
      resource_description: "Review Training Kit When Blocked!"
    },
    {
      id: 2,
      resource_name: "Google",
      resource_description: "Search Google When Stuck."
    },
    {
      id: 3,
      resource_name: "Facebook",
      resource_description: "Contact Family On Facebook"
    }
  ]);
};
