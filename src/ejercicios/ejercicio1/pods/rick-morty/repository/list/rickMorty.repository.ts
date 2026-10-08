import * as api from "../api/api";
import * as mappers from "./rickMorty.mapper";

export const getCharacters = async (page: number, name: string) =>
  api.getCharacters(page, name).then((data) => ({
    characters: mappers.mapCharactersToVm(data),
    hasNext: !!data.info?.next,
  }));
