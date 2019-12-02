const db = require("../data/db-config");

function find(){
  return db('resources');
}

function add(resource){
  return db('resources').insert(resource);
}

module.exports = {
  find,
  add
};