import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      image,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const trx = await knex.transaction();
    const point = {
      image,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };
    const insertedIds = await trx('points').insert(point);

    const pointId = insertedIds[0];
    const pointItems = items.map((itemId: number) => {
      return {
        item_id: itemId,
        point_id: pointId,
      };
    });

    await trx('point_items').insert(pointItems);
    await trx.commit();

    return response.status(201).json({
      id: pointId,
      ...point,
    });
  }
}

export default PointsController;
