
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resources_name: 'computer', resources_desc: 'what youll need to code'},
        {resources_name: 'toothbrush', resources_desc: 'used to brush teeth'},
        {resources_name: 'car', resources_desc: 'used to drive'},
        {resources_name: 'bed', resources_desc: 'needed for sleep'},
      ]);
    });
};
