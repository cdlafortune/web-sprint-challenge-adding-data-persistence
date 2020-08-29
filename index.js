const express = require('express');
const server = express();
const PORT = process.env.PORT || 5000;
const projects = require('./data/projects-router');

server.use(express.json());
server.use('/projects', projects);


server.listen(PORT, () => {
    console.log(`\n== API running on port ${PORT} ==\n`);
});

