import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CharacterDetailVM } from "./rickMortyDetail.vm";
import { getCharacter } from "../repository/detail/rickMortyDetail.repository";
import { RickMortyDetail } from "./rickMortyDetail.component";
import { switchRoutes } from "../../../router";

export const RickMortyDetailContainer: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = React.useState<CharacterDetailVM | null>(
    null,
  );

  React.useEffect(() => {
    if (id) {
      getCharacter(Number(id)).then(setCharacter);
    }
  }, [id]);

  const onBack = () => {
    navigate(switchRoutes.rickMorty);
  };

  if (!character) return <p> Loading...</p>;

  return <RickMortyDetail character={character} onBack={onBack} />;
};
