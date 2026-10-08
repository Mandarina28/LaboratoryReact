import * as api from "../api/api";
import * as mapper from "./rickMortyDetail.mapper";

export const getCharacter = async (id: number) =>
  api.getCharacter(id).then(mapper.mapCharacterDetailToVM);
