import { Router } from 'express';
import authController from './app/controllers/AuthController';
import AuthController from './app/controllers/AuthController';


const routes = new Router();


routes.post('/login', AuthController.login);
routes.post('/loginGroup', AuthController.loginGroup);


module.exports = routes;