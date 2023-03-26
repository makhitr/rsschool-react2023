export interface ICard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
  url: string;
  created: string;
}

export type SearchBarState = {
  searchValue: string;
};

export type FormState = {
  // errors: Record<string, string>;
  errors: string[];
  cardData: IFormCard | null;
};

export type FormProps = {
  createCard: (card: IFormCard) => void;
};
export interface IFormCard {
  name: string;
  created: string;
  status: boolean;
  species: string;
  gender: string;
  image?: string;
}

export type CardProps = {
  cardData: ICard | IFormCard;
};
