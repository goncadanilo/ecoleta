import { Router } from 'express';

import ItemsController from '../controllers/ItemsController';

const routes = Router();
const itemsController = new ItemsController();

routes.get('/', itemsController.index);

export default routes;
