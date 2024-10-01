const { Person, PersonSchema } = require('./persons.model.js');
const { User, UserSchema } = require('./user.model.js');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;