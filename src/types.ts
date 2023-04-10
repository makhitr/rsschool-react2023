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
export type FullCardProps = {
  id: number;
};

export type SearchBarProps = {
  search: (value: string) => void;
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
  cardData: ICard | IFormCardModified | null;
};

export type CardsListProps = {
  cards: ICard[] | IFormCardModified[];
  // cards: CardProps[];
  // cards: ICardPreview[];
};

export type ICardPreview = {
  id?: number;
  name: string;
  gender: string;
  image: string;
};

export type CardPreviewProps = {
  cardData: ICardPreview;
  onClick: () => void;
};
