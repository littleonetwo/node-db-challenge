
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks_resources').insert([
        {task_id: 1, resources_id: 1},
        {task_id: 2, resources_id: 1},
        {task_id: 3, resources_id: 1},
        {task_id: 4, resources_id: 2},
        {task_id: 5, resources_id: 4},
        {task_id: 6, resources_id: 2},
        {task_id: 7, resources_id: 3},
      ]);
    });
};
