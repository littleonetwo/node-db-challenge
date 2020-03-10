const db = require('../data/config');

function getResources() {
  return db('resources');
}

function getResourceByID(resources_id){
  return db('resources').where({resources_id}).first();
}

function getResourcesForTask(task_id){
  return db('projects as a')
          .join('tasks as b', 'a.projects_id', 'b.projects_id')
          .join('tasks_resources as c', 'b.task_id', 'c.task_id')
          .join('resources as d', 'd.resources_id', 'c.resources_id')
          .where('b.task_id', task_id)
          .select('d.resources_name', 'd.resources_desc');

}


function getProjects() {
  return db('projects');
}


function getProjectByID(projects_id){
  // console.log(db('projects').where({id}).first());
  return db('projects').where({projects_id});

}


function getTasks() {
  console.log("im here", {projects_id})
  return db('projects as a')
          .join('tasks as b', 'a.projects_id', 'b.projects_id')
          // .join('projects_tasks as c', 'b.task_id', 'c.task_id')
          // .where('a.projects_id', "b.projects_id")
          .select('a.projects_name', 'a.projects_desc', 'b.task_desc');

}

function getTasks2() {
  return db('projects as a')
          .join('tasks as b', 'a.projects_id', 'b.projects_id')
          .join('projects_tasks as c', 'b.task_id', 'c.task_id')
          // .where('a.projects_id', 'c.projects_id')
          .select('a.projects_name', 'a.projects_desc', 'b.task_id', 'b.task_desc');

}


function getTaskByID(task_id){

  return db('tasks').where({task_id}).first();

}


function addProject(project){

  return db('projects').insert(project)
            .then(ids => {
              // console.log(getProjectByID(ids[0]));
              return getProjectByID(ids[0]);
            })
}


function addTask(project_id, task){
  console.log(task);
  const newData = {task_desc:task.task_desc, projects_id:project_id, task_notes:task.task_notes};

  return db('tasks').insert(newData)
            .then(ids => {
              // db('projects_tasks').insert({projects_id:project_id, task_id:ids[0].task_id, task_status:task.task_status})
              return getTaskByID(ids[0]);
            })


}

function addResource(resource){

  return db('resources').insert(resource)
    .then(ids => {
      return getResourceByID(ids[0]);
    })
}

module.exports = {
  getResources,
  getResourcesForTask,
  getProjectByID,
  getProjects,
  getTasks,
  addTask,
  addProject,
  addResource,
  getTasks2,
  getTaskByID
}
