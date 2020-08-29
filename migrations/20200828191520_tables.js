
exports.up = async function(knex) {
  await knex.schema.createTable('projects', table => {
      table.increments('id');
      table.text('name', 128).notNull();
      table.text('description', 128);
      table.boolean('completed').defaultTo(false).notNull();
  });

  await knex.schema.createTable('resources', table => {
    table.increments('id');
    table.text('name', 128).unique().notNull();
    table.text('description', 128);
  });

  await knex.schema.createTable('projectResources', table => {
    table.increments('id');
    table.integer('project_id').notNull();
    table.integer('resource_id').notNull();
  });

  await knex.schema.createTable('tasks', table => {
    table.increments('id');
    table.integer('project_id').notNull();
    table.text('description', 128).notNull();
    table.text('notes', 128);
    table.boolean('completed').defaultTo(false).notNull();
  });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projects');
    await knex.schema.dropTableIfExists('resources');
    await knex.schema.dropTableIfExists('projectResources');
    await knex.schema.dropTableIfExists('tasks');
};
