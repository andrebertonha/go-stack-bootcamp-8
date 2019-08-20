const server = require('./server');

let numberOfRequests = 0;
var projects = [];

function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(proj => proj.id == id);

  if(!project) {
    res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

function logRequests(req, res, next) {
  numberOfRequests++;
  console.log(`Número de requisições: ${numberOfRequests}`);
  next();
}

server.use(logRequests);

server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  
  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);
  
  return res.json(project);
});

server.get('/projects', (req, res) => {  
  return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(proj => proj.id === id);
  project.title = title;

  
  return res.json(project);
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.find(p => p.id === id);
  projects.splice(projectIndex, 1)

  return res.send();
});

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id );
  project.tasks.push(title);

  return res.json(project);  
})