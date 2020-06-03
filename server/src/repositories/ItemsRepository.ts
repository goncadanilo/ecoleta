import knex from '../database/connection';

interface Items {
  id: number;
  title: string;
  image: string;
}

class ItemsRepository {
  public async getAllItems(): Promise<Items[]> {
    const items = await knex('items').select('*');
    return items;
  }
}

export default ItemsRepository;
