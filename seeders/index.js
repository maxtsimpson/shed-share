const fs = require('fs');
const path = require('path');
const connection = require("../config/mongo")
const basename = path.basename(__filename);
const users = require("./users");
const projects = require("./projects")
const posts = require("./posts")

const seedFunctions = {}

connection.then(async () => {
    await users()
    await projects()
    await posts()
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});

module.exports = seedFunctions;