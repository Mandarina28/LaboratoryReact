export interface CharacterApiEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginApiEntity;
  location: LocationApiEntity;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface OriginApiEntity {
  name: string;
  url: string;
}

export interface LocationApiEntity {
  name: string;
  url: string;
}

export interface CharacterResponseApiEntity {
  info: {
    next: string | null;
  };
  results: CharacterApiEntity[];
}
