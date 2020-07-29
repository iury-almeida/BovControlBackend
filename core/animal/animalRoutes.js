'use strict';

const animalController = require('./animalController');

module.exports = (app) => {
    app.post('/animal', animalController.create);
    app.put('/animal/:_id', animalController.update);
    app.get('/animal', animalController.select);
    app.get('/animal/:_id', animalController.selectById);
    app.delete('/animal/:_id', animalController.remove);
    app.get('/ping', (req, res) => {
        res.send(new Date());
    });
};