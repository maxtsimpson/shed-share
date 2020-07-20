const { uuid } = require('uuidv4');
const faker = require('faker')

const generateUsers = (numberOfUsers = 20) => {
    const userList = []
    for (let index = 0; index < numberOfUsers; index++) {
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            picture: faker.image.avatar()
        }
        userList.push(user)
    }
    return userList
}

export default generateUsers