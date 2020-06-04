import knex from '../database/connection';

interface Point {
  id?: number;
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
}

class CreatePointService {
  public async execute(point: Point, items: Array<number>): Promise<Point> {
    const trx = await knex.transaction();
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

    return { id: pointId, ...point };
  }
}

export default CreatePointService;
