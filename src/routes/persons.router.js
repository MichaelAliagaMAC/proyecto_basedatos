const express = require('express');
const personsRouter = express.Router(); 
const personsController = require('../controllers/persons.controller');

personsRouter
    .get('/', personsController.get )
    .get('/:id', personsController.getById )
    .post('/', personsController.create )
    .put('/:id', personsController.update )
    .delete('/:id', personsController._delete );

module.exports = personsRouter;