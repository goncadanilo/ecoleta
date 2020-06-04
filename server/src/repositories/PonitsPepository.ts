import knex from '../database/connection';
import CreatePointDto from '../dtos/CreatePointDto';

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
  }: CreatePointDto): Promise<number> {
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
