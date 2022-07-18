import { Router } from 'express';
import * as MessageController from './menssage.js';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('<h1>API Tech Academy</h1>');
});

routes.post('/message', MessageController.message);

export default routes;
