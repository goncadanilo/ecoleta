import { Request, Response } from 'express';

import CreatePointService from '../services/CreatePointService';
import PointsRepository from '../repositories/PonitsPepository';
import FindPointByIdService from '../services/FindPointByIdService';

class PointsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const pointsRepository = new PointsRepository();
    const createPointService = new CreatePointService(pointsRepository);
    const point = request.body;
    const createdPoint = await createPointService.execute(point);

    return response.status(201).json(createdPoint);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const pointsRepository = new PointsRepository();
    const findPointByIdService = new FindPointByIdService(pointsRepository);
    const { id } = request.params;
    const point = await findPointByIdService.execute(id);

    return response.status(200).json(point);
  }
}

export default PointsController;
