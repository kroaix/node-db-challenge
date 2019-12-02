const db = require("../data/db-config");

function find(){
  return db("tasks")
    .select(
      "tasks.id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    )
    .from("tasks")
    .join("projects", "projects.id", "tasks.project_id")
}

function getProject(id){
  return db('projects')
  .where({'projects.id': id})
}

async function addTask(id, task){
  await getProject(id);
  return db('tasks').insert(task);
}

module.exports = {
  find,
  addTask
};