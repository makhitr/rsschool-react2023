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

export interface ISearch {
  searchValue: string;
}

export interface IFormCard {
  name: string;
  created: string;
  status: boolean;
  species: string;
  gender: string;
  image: FileList;
}

export interface IFormCardModified {
  id: number;
  name: string;
  created: string;
  status: boolean;
  species: string;
  gender: string;
  image: string;
}
export type CardProps = {
  cardData: IFormCardModified;
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
