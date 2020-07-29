'use strict';

module.exports = {
    create,
    select,
    selectById,
    remove
}

async function create(animal) {
    try {
        let result = await animal.save()
        return result;
    } catch (error) {
        return error;
    }

}

async function select(Animal) {
    try {
        let result = await Animal.find({})
        return result;
    } catch (error) {
        return error;
    }

}

async function selectById(Animal, _id) {
    try {
        let result = await Animal.findById(_id);
        return result;
    } catch (error) {
        return error;
    }

}

async function remove(Animal, _id) {
    try {
        let result = await Animal.remove({_id});
        return result;
    } catch (error) {
        return error;
    }

}
