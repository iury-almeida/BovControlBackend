

let Validator = require('jsonschema').Validator,
    Animal = new Validator();

module.exports = {
    create,
    update
}

async function create(animal) {
    let schema = {
        type: Object,
        properties: {
            name: {
                type: "string",
                required: true,
                maxLength: 60
            },
            type: {
                type: "string",
                required: true,
                maxLength: 50
            },
            weight: {
                type: "number",
                required: true
            },
            monthAge: {
                type: "number",
                required: true
            }
        }  
    };
    
    let validatition = Animal.validate(animal, schema);

    if (validatition.valid)
        return;
    else 
        throw validatition.errors;

}

async function update(animal) {
    let schema = {
        type: Object,
        properties: {
            _id: {
                type: "string",
                required: true
            },
            name: {
                type: "string",
                required: true,
                maxLength: 60
            },
            type: {
                type: "string",
                required: true,
                maxLength: 50
            },
            weight: {
                type: "number",
                required: true
            },
            monthAge: {
                type: "number",
                required: true
            }
        }  
    };
    
    let validatition = Animal.validate(animal, schema);

    if (validatition.valid)
        return;
    else 
        throw validatition.errors;

}