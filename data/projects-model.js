const db = require('./config');

module.exports = {
    getProjects, 
    getProjectById,
    getResources,
    getAllResources,
    getTasks,
    addProject, 
    addResource,
    addResourceToProject,
    addTask
};

function getProjects(){
    return db('projects');
};

function getProjectById(id){
    return db('projects').where({id}).first();
};

function getResources(projectId){
    return db('projectResources').where('project_id', projectId);
};

function getAllResources(){
    return db('resources');
};

function getTasks(projectId){
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .where('project_id', projectId);
};

function addProject(project){
    return db('projects')
        .insert(project)
};

function addResource(resource){
    return db('resources')
        .insert(resource)
};

function addResourceToProject(projectId, resourceId) {
    return db('projectResources')
        .insert({
            project_id: projectId,
            resource_id: resourceId
        });
};

function addTask(task){
    return db('tasks')
        .insert(task)
};