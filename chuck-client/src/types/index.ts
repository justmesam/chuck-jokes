export interface Category {
  category: string
}

export interface Joke {
  iconUrl: string;
  value: string;
  id: string;
  url: string;
}

export interface State {
  categories: Category[];
  joke: Joke;
}
