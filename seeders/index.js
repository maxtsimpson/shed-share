const fs = require('fs');
const path = require('path');
const connection = require("./config/mongo.js")
const basename = path.basename(__filename);

const seedFunctions = {}

connection.then(() => {
    fs
        .readdirSync(__dirname)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(async file => {
            seedFunctions[file] = require(path.join(__dirname, file))
            console.log(`====== running ${file} seed ========`)
            await seedFunctions[file]()
        })
        .then(() => {
            console.log("***** completed seed operation ******")
            process.exit(0);
        });
})
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

module.exports = seedFunctions;