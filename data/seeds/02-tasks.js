
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_desc: 'create migrations', task_notes: 'setup your migrations to work on seeds', projects_id: 1},
        {task_desc: 'create seeds', task_notes: 'setup your seeds to work on endpoints', projects_id: 1},
        {task_desc: 'create endpoints', task_notes: 'setup endpoints to test your database', projects_id: 1},
        {task_desc: 'get ready', task_notes: 'wake up, take a shower, brush teeth', projects_id: 2},
        {task_desc: 'drive to work', task_notes: 'drive to work on time', projects_id: 2},
        {task_desc: 'get ready for bed', task_notes: 'brush teeth, change clothes', projects_id: 3},
        {task_desc: 'sleep', task_notes: 'goto bed', projects_id: 3},
      ]);
    });
};
