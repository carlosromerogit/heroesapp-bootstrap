export interface Heroe {
  id?: string;
  superhero: string;
  publisher: Publisher | string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  image?: string;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}
