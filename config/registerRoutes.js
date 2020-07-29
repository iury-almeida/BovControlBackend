'use strict';

const animalRoutes = require('../core/animal/animalRoutes');

module.exports = (app) => {
    animalRoutes(app);
}