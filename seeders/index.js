const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const seedFunctions = {}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        seedFunctions[file] = require(path.join(__dirname,file))
        console.log(`====== running ${file} seed ========`)
        seedFunctions[file]()
    });

module.exports = seedFunctions;