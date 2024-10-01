const express = require('express');
const usersRouter = require('./users.router'); 
const personsRouter = require('./persons.router'); 

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router); 

  // Rutas de personas
  router.use('/persons', personsRouter);

  // Rutas de usuarios
  router.use('/users', usersRouter);

}

module.exports = routerApi;