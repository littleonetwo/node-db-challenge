
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects_tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects_tasks').insert([
        {projects_id: 1, task_id: 1, task_status:false},
        {projects_id: 1, task_id: 2, task_status:false},
        {projects_id: 1, task_id: 3, task_status:false},
        {projects_id: 2, task_id: 4, task_status:false},
        {projects_id: 2, task_id: 5, task_status:false},
        {projects_id: 3, task_id: 6, task_status:false},
        {projects_id: 3, task_id: 7, task_status:false},
      ]);
    });
};
