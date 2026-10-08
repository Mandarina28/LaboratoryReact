import * as am from "../api/api.model";
import * as vm from "../../list/rickMorty.vm";

export const mapCharacterToVM = (
  character: am.CharacterApiEntity,
): vm.CharacterVM => ({
  id: character.id,
  name: character.name,
  image: character.image,
});

export const mapCharactersToVm = (
  response: am.CharacterResponseApiEntity,
): vm.CharacterVM[] => response.results.map(mapCharacterToVM);
