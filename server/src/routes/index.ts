import { Router } from 'express';

import itemsRoutes from './items.routes';
import pointsRoutes from './points.routes';

const routes = Router();

routes.use('/items', itemsRoutes);
routes.use('/points', pointsRoutes);

export default routes;
