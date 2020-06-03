import { Request, Response } from 'express';

import knex from '../database/connection';

class ItemsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const items = await knex('items').select('*');
    const serealizedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/files/${item.image}`,
      };
    });

    return response.status(200).json(serealizedItems);
  }
}

export default ItemsController;
