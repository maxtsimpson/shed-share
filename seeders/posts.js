const faker = require('faker')
let db = require("../models");
const connection = require("../config/mongo")
const { getRandomModel } = require('./helpers/getRandomModel')

const Posts = [
    {
        title: 'Chisels',
        body: "has anyone got any good recommendations for where to find the best chisels in perth?",
        videoLink: null,
        img: null,
        user_id: null,
    },
    {
        title: 'looking for a new project',
        body: "hey fellas anyone got any ideas for a new project? i'm thinking something i could do while the kids sleep, so would have to be fairly quiet. i can do it in the shed not in the house so i was thinking capentry with a wood mallet but not sure what to start with. maybe a coffee table?",
        videoLink: null,
        img: null,
        user_id: null,
    },
    {
        title: "HELP! What's it called?",
        body: "what's the thing that your pedals are connected to on a bike? the center cylinder part? i've got an idea to use something like that in a project of mine",
        videoLink: null,
        img: null,
        user_id: null,
    },
    {
        title: 'the WRONG way to weld',
        body: "almost lit myself on fire today haha checkout my project vids for the WRONG way to do it!",
        videoLink: null,
        img: null,
        user_id: null,
    },
    {
        title: 'Noise regulation / restrictions?',
        body: "I've just got into some metalwork and am making a lot a noise with my grinder. does anyone know if the noise regulations around power tools are the same on weekends as week days?",
        videoLink: null,
        img: null,
        user_id: null,
    },
    {
        title: 'Your dream job',
        body: "just for shits and giggles thought i'd start a thread on your dream job. i'm only starting out so looking to steal your dreams like sandman haha",
        videoLink: null,
        img: null,
        user_id: null,
    },
    {
        title: 'Best cheap car to play with',
        body: "thinking of a mad max type project and was wondering if anyone has previous good or bad stories on cars to chop up under $500. was thinking about the size of a mazda 323 or corolla sedan. don't want anything to heavy",
        videoLink: null,
        img: null,
        user_id: null,
    },
    {
        title: 'Tips to land an apprentiship',
        body: "I'm 16 and want to be an apprentice on the mines, what would you recommend i do to try and land an apprenticeship? should i work on small scale electronics like an arduino or something? or TAFE pre-apprentiship? does anyone hire apprentices have an opinion?",
        videoLink: null,
        img: null,
        user_id: null,
    },
    {
        title: 'Looking for a shed to work with',
        body: "Hey guys just moved here from sydney and living in perth city. am a big fan of car mods and things like custom air intakes / exhaust. looking for a place to do some of my own work and help out with your projects",
        videoLink: null,
        img: null,
        user_id: null,
    },
    {
        title: 'how to find decent wood from the bush',
        body: "has anyone got any tips or how to identify good wood from the bush? i'm looking at making small stuff to start with (like a jewellery box) but am going to move up to bigger furniture like coffee tables, and maybe eventually a book shelf. has anyone got any tips?",
        videoLink: null,
        img: null,
        user_id: null,
    }
]

const seedPosts = async (numberOfPosts = 20) => {

    console.log('running seedPosts')
    await db.Post.collection.deleteMany();

    // for (let index = 0; index < numberOfPosts; index++) {
    for (let index = 0; index < Posts.length; index++) {

        console.log('finished deleteMany')
        const userID = await getRandomModel("User")
        console.log('finished getRandomModel')

        //could be more efficient with spread syntax
        let post = new db.Post({
            title: Posts[index].title,
            body: Posts[index].body,
            user_id: userID,
        })

        // this works, but i need realistic data for presentation
        // const post = new db.Post({
        //     title: faker.lorem.sentence(),
        //     body: faker.lorem.paragraph(),
        //     user_id: null,
        // })

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
