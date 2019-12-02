const express = require("express");

const Projects = require("./projects/projects-router.js");
const Tasks = require("./tasks/tasks-router.js");
const Resources = require("./resources/resources-router.js");

const server = express();

server.use(express.json());
server.use(logger);

server.use("/api/projects", Projects);
server.use("/api/tasks", Tasks);
server.use("/api/resources", Resources);

server.get("/", (req, res) => {
  res.send(`<h1>NodeDB Challenge</h1>`);
});

function logger(req, res, next) {
  console.log(`${req.method} to ${req.url}`);
  next();
}

module.exports = server;
