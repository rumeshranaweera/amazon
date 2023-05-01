type product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number };
  hasPrime?: boolean;
};
