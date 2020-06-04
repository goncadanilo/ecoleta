import knex from '../database/connection';

interface Point {
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  items: Array<number>;
}

class PointsRepository {
  public async createPoint({
    image,
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
  }: Point): Promise<number> {
    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert({
      image,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    });

    const pointId = insertedIds[0];
    const pointItems = items.map((itemId: number) => {
      return {
        item_id: itemId,
        point_id: pointId,
      };
    });

    await trx('point_items').insert(pointItems);
    await trx.commit();

    return pointId;
  }
}

export default PointsRepository;
