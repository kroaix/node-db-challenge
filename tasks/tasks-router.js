const express = require("express");

const Tasks = require("./tasks-model");

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.find();
    const updatedTasks = [...tasks].map(task => {
      task.task_completed = Boolean(task.task_completed);
      return task;
    });
    res.status(200).json({ success: true, updatedTasks });
  } catch {
    res.status(500).json({ success: false, error: "Problem with request." })
  }
})

module.exports = router;
