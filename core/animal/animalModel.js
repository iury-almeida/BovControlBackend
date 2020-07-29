
'use strict';

let mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useUnifiedTopology: true, useNewUrlParser: true})

let AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 60
    },
    type: {
        type: String,
        required: true,
        maxlength: 50
    },
    weight: {
        type: Number,
        required: true
    },
    monthAge: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('animals', AnimalSchema);