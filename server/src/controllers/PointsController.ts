import { Request, Response } from 'express';

import CreatePointService from '../services/CreatePointService';
import PointsRepository from '../repositories/PonitsPepository';

class PointsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const pointsRepository = new PointsRepository();
    const createPointService = new CreatePointService(pointsRepository);
    const point = request.body;
    const createdPoint = await createPointService.execute(point);

    return response.status(201).json(createdPoint);
  }
}

export default PointsController;
