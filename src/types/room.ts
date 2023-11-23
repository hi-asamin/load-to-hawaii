interface IRoom {
  id: string;
  name: string;
  images: Image[];
  description: string;
  rank?: string;
  thumbnail: string;
  area: string;
  discountInfo?: string;
  price: string;
  capacity: string;
}
