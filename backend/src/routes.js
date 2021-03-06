const express = require('express');

const ProfileController = require('./controllers/ProfileController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post("/ongs", OngController.create);


routes.get('/incidents', IncidentController.index );
routes.delete('/incidents/:id', IncidentController.delete );
routes.post('/incidents', IncidentController.create );

routes.get('/profile', ProfileController.index);

module.exports = routes;