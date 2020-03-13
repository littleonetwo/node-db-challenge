
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projects_name: 'finish the sprint', project_status: false, projects_desc:'finish the sprint 100%'},
        {projects_name: 'go to work', project_status: false, projects_desc:'make sure you get to work'},
        {projects_name: 'get some sleep', project_status: true, projects_desc:'get at least 6 hours of sleep'}
      ]);
    });
};
