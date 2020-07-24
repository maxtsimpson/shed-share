const { uuid } = require('uuidv4');
const faker = require('faker')
let db = require("../models");
const connection = require("../config/mongo")

const seedProjects = async (numberOfProjects = 20) => {

    await db.Project.collection.deleteMany();

    const userID = await db.User.findOne({}).then(user => user._id)
    
    // for (let index = 0; index < numberOfProjects; index++) {
    const project = new db.Project({
        title: 'retrofit shelves',
        displayPic: null,
        steps: [
            {
                description: "I've had a look at what tools i need for the project. whether i could use angle grinder or an oxy torch",
                category: {
                    title: 'Research',
                    icon: null,
                },
                videoLink: null,
                img: null,
            },
            {
                description: "I've sketched out a diagram with some measurements. used the kitchen bench height as a guide for my bench height",
                category: {
                    title: 'Design',
                    icon: null,
                },
                videoLink: null,
                img: null,
            },
            {
                description: "Cut some old patio steel to length and started on some welds.",
                category: {
                    title: 'Build',
                    icon: null,
                },
                videoLink: null,
                img: null,
            }
        ],
        tags: [
            'welding',
            'shelves'
        ],
        user_id: userID,
    })


    //need to use a try-catch as its possible the userName won't be unique
    try {
        await db.Project.create(project)
    }
    catch (error) {
        //need to manually run this with two usernames to check the error i get back
        console.log(error)
    }
    // }
}

module.exports = seedProjects
