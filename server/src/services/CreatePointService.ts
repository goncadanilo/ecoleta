import PointsRepository from '../repositories/PonitsPepository';

interface Point {
  id?: number;
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  items: Array<number>;
}

class CreatePointService {
  constructor(private readonly pointsRepository: PointsRepository) {}

  public async execute(point: Point): Promise<Point> {
    const pointId = await this.pointsRepository.createPoint(point);

    return { id: pointId, ...point };
  }
}

export default CreatePointService;
