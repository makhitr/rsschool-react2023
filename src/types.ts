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

export type FormState = {
  errors: string[];
  cardData: IFormCard | null;
  completed: boolean;
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

export type CardsListProps = {
  cards: ICard[] | IFormCard[];
};
