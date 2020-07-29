'use strict';

const repository = require('./animalRepository');
let Animal = require('./animalModel');

module.exports = {
    create,
    update,
    select,
    selectById,
    remove
}

let animal = new Animal();

async function create(params) {
    try {

        animal.name = params.name;
        animal.type = params.type;
        animal.weight = params.weight;
        animal.monthAge = params.monthAge;

        let result = await repository.create(animal);
        return {
            result: { _id: result._id },
            message: "Animal created"
        };
    } catch (error) {
        return error;
    }
}

async function update(params) {
    try {
        let animal = await repository.selectById(Animal, params._id);

        animal.name = params.name;
        animal.type = params.type;
        animal.weight = params.weight;
        animal.monthAge = params.monthAge;

        let result = await repository.create(animal);
        return {
            result: { _id: result._id },
            message: "Animal updated"
        };
    } catch (error) {
        return error;
    }
}

async function select(params) {
    try {
        let result = await repository.select(Animal);
        if (result)
            result = _returnAnimalsHandling(result);
        return {
            result: result,
            message: result == null ? "No animals found" : "Animals found"
        };
    } catch (error) {
        return error;
    }
}

async function selectById(params) {
    try {
        let result = await repository.selectById(Animal, params._id);
        if (result)
            result = _returnAnimalHandling(result);
        return {
            result: result,
            message: result == null ? "No animal found" : "Animal found"
        };
    } catch (error) {
        return error;
    }
}

async function remove(params) {
    try {
        let result = await repository.remove(Animal, params._id);
        return {
            result: result,
            message: result.n == 0 ? "No animal found, no changes were done" : "Animal removed"
        };
    } catch (error) {
        return error;
    }
}

function _returnAnimalsHandling(animal) {
    animal.map(x => {
        x._doc.weight = `${parseFloat(x.weight).toFixed(2)} KG`,
        x._doc.monthAge = `${parseFloat(x.monthAge).toFixed(1)} Months`
    });

    return animal;
}

function _returnAnimalHandling(animal) {
    animal._doc.weight = `${parseFloat(animal.weight).toFixed(2)} KG`
    animal._doc.monthAge = `${parseFloat(animal.monthAge).toFixed(1)} Months`;

    return animal;
}