const express = require('express');
const db = require('./projects-model');

const router = express.Router();

//get all projects
router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to find projects.'})
        });
});

//get project by id
router.get('/:id', (req, res) => {
    const {id} = req.params;

    db.getProjectById(id)
        .then(project => {
            if (project){
                res.json(project)
            } else {
                res.status(404).json({message: 'Project not found.'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to find project'})
        })
});

//get all resources
router.get('/resources', (req, res) => {
    db.getAllResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to find resources'})
        })
});

//get all resources for a project
router.get('/:id/resources', (req, res) => {
    const {id} = req.params;

    db.getResources(id)
        .then(resources => {
            if (resources){
                res.json(resources)
            } else {
                res.status(404).json({message: 'Resources not found.'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to find resources'})
        })
});

//get all tasks for a project
router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;

    db.getTasks(id)
        .then(tasks => {
            if (tasks){
                res.json(tasks)
            }else {
                res.status(404).json({message: 'Tasks not found.'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to find tasks'})
        })
});

//add new project
router.post('/', (req, res) => {

    db.addProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to create project.'})
        })
});

//add new resource
router.post('/resources', (req, res) => {
    db.addResource(req.body)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to create resource.'})
        })
});

//add resource to project
router.post('/:id/resources', (req, res) => {
    const {id} = req.params;

    db.addResourceToProject(id, req.body.resource_id)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to create resource.'})
        })
});

//add new task to project
router.post('/:id/tasks', (req, res) => {
    const {id} = req.params;

    db.addTask(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to create task.'})
        })
});

module.exports = router;