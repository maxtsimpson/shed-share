const { uuid } = require('uuidv4');
const faker = require('faker')
let db = require("../models");
const connection = require("../config/mongo")

const seedUsers = async (numberOfUsers = 20) => {

    //delete the existing users
    await db.User.collection.deleteMany();

    for (let index = 0; index < numberOfUsers; index++) {
        const user = new db.User({
            username: faker.internet.userName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        })


        //need to use a try-catch as its possible the userName won't be unique
        try {
            await db.User.create(user)
        }
        catch(error) {
            //need to manually run this with two usernames to check the error i get back
            console.log(error)
        }
    }
}

module.exports = seedUsers
