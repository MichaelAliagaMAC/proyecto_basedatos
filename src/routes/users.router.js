const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/user.controller');

usersRouter
    .get('/', usersController.get)
    .get('/:id', usersController.getById)
    .post('/', usersController.create)
    .put('/:id', usersController.update)
    .delete('/:id', usersController._delete);

module.exports = usersRouter;