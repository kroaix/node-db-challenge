const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.find();
    const intToBool = [...projects].map(project => {
      project.project_completed = Boolean(project.project_completed);
      return project;
    })
    res.status(200).json({ success: true, intToBool }); 
  } catch {
    res.status(500).json({ success: false, error: "Problem with request." })
  }
})

router.post('/', async (req, res) => {
  const projectData = req.body;
  try {
    if(!projectData.project_name){
      res.status(400).json({ success: false, error: "Name is required." })
    } else {
      const project = await Projects.add(projectData);
      res.status(201).json({ success: true, project });
    }
  } catch {
    res.status(500).json({ success: false, error: "Problem with request." })
  }
})

module.exports = router;