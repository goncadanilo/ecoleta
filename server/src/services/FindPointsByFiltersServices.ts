import PointsRepository from '../repositories/PonitsPepository';
import ListPoinsByFilter from '../dtos/ListPointsByFilterDto';

class FindPointsByFilters {
  constructor(private readonly pointsRepository: PointsRepository) {}

  public async execute(
    city: string,
    uf: string,
    items: string,
  ): Promise<ListPoinsByFilter[]> {
    const parsedItems = items.split(',').map(item => Number(item.trim()));
    const points = await this.pointsRepository.getPointsByFilter(
      city,
      uf,
      parsedItems,
    );

    return points;
  }
}

export default FindPointsByFilters;
