import { Router } from 'express';

import PointsController from '../controllers/PointsController';

const routes = Router();
const pointsController = new PointsController();

routes.post('/', pointsController.create);
routes.get('/', pointsController.index);
routes.get('/:id', pointsController.show);

export default routes;
