const express = require('express');

const ProjectRouter = require('./projects/projects-router.js');

const server = express(); //this is an express server

server.use(express.json()); //expect json
server.use('/api/projects', ProjectRouter)

module.exports = server;
