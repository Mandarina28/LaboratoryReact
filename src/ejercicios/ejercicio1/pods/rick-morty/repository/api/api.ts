import { CharacterApiEntity, CharacterResponseApiEntity } from "./api.model";

export const getCharacters = async (
  page: number,
  name: string,
): Promise<CharacterResponseApiEntity> => {
  return fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`,
  ).then((response) => response.json());
};

// DETAIL
export const getCharacter = async (id: number): Promise<CharacterApiEntity> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (response) => response.json(),
  );
};
