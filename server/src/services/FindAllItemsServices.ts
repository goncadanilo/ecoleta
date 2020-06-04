import ItemsRepository from '../repositories/ItemsRepository';
import ListAllItemsDto from '../dtos/ListAllItemsDto';

class FindAllItemsServices {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  public async execute(): Promise<ListAllItemsDto[]> {
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
