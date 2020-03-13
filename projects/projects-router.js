const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects()
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/:id', (req, res) => {
  Projects.getProjectByID(req.params.id)
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/resources', (req, res) => {
  Projects.getResources()
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Resources' });
  });
});

router.get('/tasks/:id/resources', (req, res) => {
  const { id } = req.params;

  Projects.getResourcesForTask(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find resources with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/get/tasks', (req, res) => {
  console.log("troubleshoot")
  Projects.getTasks2()
    .then(project => {
      console.log(project)
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find Tasks' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
})


router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.getTaskByID(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find Tasks with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});


router.post('/', (req, res) => {
  if (!req.body.project_status){
    req.body.project_status = false;
  }

    const projectData = req.body;

  console.log("project data: ", projectData);

  Projects.addProject(projectData)
    .then(project =>{
      res.status(201).json(project);
    })
    .catch(err => res.status(500).json({ errorMessage: "Failed to create Project"}))

})

router.post('/:id/tasks', (req, res) => {
  if (!req.body.task_status){
    req.body.task_status = false;
  }

  const taskData = req.body;

  console.log(taskData);

  Projects.addTask(req.params.id, taskData)
    .then(project =>{
      res.status(201).json(project);
    })
    .catch(err => res.status(500).json({ errorMessage: "Failed to create Task"}))

})

router.post('/resources', (req, res) => {

  const resourceData = req.body;

  console.log(resourceData);

  Projects.addResource(resourceData)
    .then(project =>{
      res.status(201).json(project);
    })
    .catch(err => res.status(500).json({ errorMessage: "Failed to create Resource"}))

})


module.exports = router;
