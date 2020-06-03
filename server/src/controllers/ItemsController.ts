import { Request, Response } from 'express';

import ItemsRepository from '../repositories/ItemsRepository';
import FindAllItemsService from '../services/FindAllItemsServices';

class ItemsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const itemsRepository = new ItemsRepository();
    const findAllItemsService = new FindAllItemsService(itemsRepository);
    const items = await findAllItemsService.execute();

    return response.status(200).json(items);
  }
}

export default ItemsController;
