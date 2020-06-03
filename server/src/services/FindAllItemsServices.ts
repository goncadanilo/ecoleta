import ItemsRepository from '../repositories/ItemsRepository';

interface Items {
  id: number;
  title: string;
  image: string;
}

class FindAllItemsServices {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  public async execute(): Promise<Items[]> {
    const items = await this.itemsRepository.getAllItems();
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
