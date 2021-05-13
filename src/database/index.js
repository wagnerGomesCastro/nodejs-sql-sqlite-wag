const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
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

module.exports = connection;
