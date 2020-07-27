const faker = require('faker')
let db = require("../models");
const connection = require("../config/mongo")
const { getRandomModel } = require('./helpers/getRandomModel')

const seedPosts = async (numberOfPosts = 20) => {

    console.log('running seedPosts')
    await db.Post.collection.deleteMany();

    for (let index = 0; index < numberOfPosts; index++) {

        console.log('finished deleteMany')
        const userID = await getRandomModel("User")
        console.log('finished getRandomModel')

        const post = new db.Post({
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            user_id: userID,
        })

        //need to use a try-catch as its possible the userName won't be unique
        try {
            await db.Post.create(post)
        }
        catch (error) {
            //need to manually run this with two usernames to check the error i get back
            console.log(error)
        }
    }
}

module.exports = seedPosts
