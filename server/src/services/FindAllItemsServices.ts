import knex from '../database/connection';

interface Items {
  id: number;
  title: string;
  image: string;
}

class FindAllItemsServices {
  public async execute(): Promise<Items[]> {
    const items = await knex('items').select('*');
    const serealizedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image: `http://localhost:3333/files/${item.image}`,
      };
    });

    return serealizedItems;
  }
}

export default FindAllItemsServices;
