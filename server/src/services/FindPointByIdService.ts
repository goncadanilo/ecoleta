import PointsRepository from '../repositories/PonitsPepository';
import ListOnePointDto from '../dtos/ListOnePointDto';

class FindPointByIdService {
  constructor(private readonly pointsRepository: PointsRepository) {}

  public async execute(id: string): Promise<ListOnePointDto> {
    const point = await this.pointsRepository.getPointById(Number(id));
    return point;
  }
}

export default FindPointByIdService;
