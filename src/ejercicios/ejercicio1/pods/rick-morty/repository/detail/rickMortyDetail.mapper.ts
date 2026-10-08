import * as am from "../api/api.model";
import * as vm from "../../detail/rickMortyDetail.vm";

export const mapCharacterDetailToVM = (
  character: am.CharacterApiEntity,
): vm.CharacterDetailVM => ({
  id: character.id,
  name: character.name,
  image: character.image,
  status: character.status,
  species: character.species,
  gender: character.gender,
  origin: character.origin.name,
});
