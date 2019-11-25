exports.up = function(knex) {
  return knex.schema
    .createTable("projects", project => {
      project.increments();
      project.string("project_name").notNullable();
      project.text("project_description");
      project.boolean("project_completed").defaultTo(false);
    })
    .createTable("tasks", task => {
      task.increments();
      task.text("task_description").notNullable();
      task.string("task_notes");
      task.boolean("task_completed").defaultTo(false);
      task
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("resources", resource => {
      resource.increments();
      resource.string("resource_name").notNullable();
      resource.text("resource_description");
    })
    .createTable("project_resources", pr => {
      pr.increments();
      pr.integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      pr.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("project_resources");
};