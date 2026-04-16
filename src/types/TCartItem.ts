export type TPizza = {
  id: string;
  category: number;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
  imageUrl: string;
  count: number;
};

export type TCartItem = {
  id: string;
  category: number;
  title: string;
  types: string;
  sizes: number;
  price: number;
  rating: number;
  imageUrl: string;
  count: number;
};
