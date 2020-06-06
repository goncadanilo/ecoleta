import knex from '../database/connection';
import AppError from '../errors/AppError';
import CreatePointDto from '../dtos/CreatePointDto';
import ListOnePointDto from '../dtos/ListOnePointDto';
import ListPointsByFilterDto from '../dtos/ListPointsByFilterDto';

class PointsRepository {
  public async createPoint({
    image = 'fake-image',
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

  public async getPointById(id: number): Promise<ListOnePointDto> {
    const point = await knex('points').select('*').where('id', id).first();

    if (!point) {
      throw new AppError('Point not found');
    }

    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.id')
      .where('point_items.point_id', id)
      .select('items.title');

    return { point, items };
  }

  public async getPointsByFilter(
    city: string,
    uf: string,
    items: number[],
  ): Promise<ListPointsByFilterDto[]> {
    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', items)
      .where('city', city)
      .where('uf', uf)
      .distinct()
      .select('points.*');

    return points;
  }
}

export default PointsRepository;
