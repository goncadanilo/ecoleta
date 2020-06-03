import { Request, Response } from 'express';

import FindAllItemsService from '../services/FindAllItemsServices';

class ItemsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllItemsService = new FindAllItemsService();
    const items = await findAllItemsService.execute();

    return response.status(200).json(items);
  }
}

export default ItemsController;
