let db = require('../../models');


async function getRandomModel(modelName){
    const model = db[modelName];

    const count = await model.count({});

    const rand = Math.floor(Math.random() * count);

    const models = await model.find({});

    return models[rand];
}

async function getRandomUser(){

    const count = await db.User.count({});

    const rand = Math.floor(Math.random() * count);

    const models = await db.User.find({});

    return models[rand];
}

module.exports = {getRandomModel,getRandomUser}
