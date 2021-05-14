const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig);

/**
 * Testing the connection
 */
// connection
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models)
Address.associate(connection.models)
Tech.associate(connection.models);

module.exports = connection;
