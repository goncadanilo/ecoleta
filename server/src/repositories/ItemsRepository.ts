import knex from '../database/connection';
import ListAllItemsDto from '../dtos/ListAllItemsDto';

class ItemsRepository {
  public async getAllItems(): Promise<ListAllItemsDto[]> {
    const items = await knex('items').select('*');
    return items;
  }
}

export default ItemsRepository;
