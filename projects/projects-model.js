const db = require('../data/db-config');

function find(){
  return db('projects');
}

function add(project){
  return db('projects').insert(project);
}

module.exports = {
  find,
  add
}