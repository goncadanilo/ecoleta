import { Request, Response } from 'express';

import CreatePointService from '../services/CreatePointService';

class PointsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createPointService = new CreatePointService();
    const point = request.body;
    const { items } = point;

    delete point.items;

    const createdPoint = await createPointService.execute(point, items);

    return response.status(201).json(createdPoint);
  }
}

export default PointsController;
