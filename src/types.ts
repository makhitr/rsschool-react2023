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
  episode: string[];
  url: string;
  created: string;
}

export type FormProps = {
  createCard: (card: IFormCardModified) => void;
};

export interface IFormCard {
  name: string;
  created: string;
  status: boolean;
  species: string;
  gender: string;
  image: FileList;
}

export interface IFormCardModified {
  name: string;
  created: string;
  status: boolean;
  species: string;
  gender: string;
  image: string;
}
export type CardProps = {
  cardData: ICard | IFormCardModified;
};

export type CardsListProps = {
  cards: ICard[] | IFormCardModified[];
};
