import PointsRepository from '../repositories/PonitsPepository';
import CreatePointDto from '../dtos/CreatePointDto';

interface CreatedPoint {
  id: number;
}

class CreatePointService {
  constructor(private readonly pointsRepository: PointsRepository) {}

  public async execute(point: CreatePointDto): Promise<CreatedPoint> {
    const pointId = await this.pointsRepository.createPoint(point);

    return { id: pointId, ...point };
  }
}

export default CreatePointService;
