export interface AppState {
  items: FavoriteProduct[];
}

export interface FavoriteProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  isFavorite?: boolean;
}
