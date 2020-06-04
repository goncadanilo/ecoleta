interface Point {
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
}

interface Items {
  title: string;
}

export default interface ListOnePointDto {
  point: Point;
  items: Items[];
}
