'use strict';
let mongoose = require('mongoose'),
     db;

        db = mongoose.createConnection(process.env.CONNECTIONSTRING);

module.exports = db;