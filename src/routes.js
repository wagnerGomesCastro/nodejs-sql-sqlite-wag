const express = require('express');

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/addresses', AddressController.index);
routes.get('/users/:user_id/addresses', AddressController.show);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/techs', TechController.index);
routes.get('/users/:user_id/techs', TechController.show);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);


module.exports = routes;