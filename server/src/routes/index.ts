import { Router } from 'express';

import itemsRoutes from './items.routes';

const routes = Router();

routes.use('/items', itemsRoutes);

export default routes;
