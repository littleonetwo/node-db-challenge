
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('projects_id');
      tbl.string('projects_name').notNullable();
      tbl.string('projects_desc', 128);
      tbl.boolean('project_status').notNullable();
    })

    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.string('task_desc', 128).notNullable();
      tbl.string('task_notes', 128)
      tbl.integer('projects_id').unsigned().notNullable().references('projects_id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE');
    })

    .createTable('resources', tbl => {
      tbl.increments('resources_id');
      tbl.string('resources_name', 20).notNullable();
      tbl.string('resources_desc', 128);
    })

    .createTable('projects_tasks', tbl => {
      tbl.integer('projects_id').unsigned().notNullable().references('projects_id').inTable('projects');
      tbl.integer('task_id').unsigned().notNullable().references('task_id').inTable('tasks');
      tbl.boolean('task_status').notNullable();

      tbl.primary(['projects_id', 'task_id']);
    })

    .createTable('tasks_resources', tbl => {
      tbl.integer('task_id').unsigned().notNullable().references('task_id').inTable('tasks');
      tbl.integer('resources_id').unsigned().notNullable().references('resources_id').inTable('resources');

      tbl.primary(['task_id', 'resources_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks_resources')
    .dropTableIfExists('projects_tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')

};
