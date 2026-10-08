import React from "react";
import { CharacterVM } from "./rickMorty.vm";
import { useNavigate } from "react-router-dom";
import { getCharacters } from "../repository/list/rickMorty.repository";
import { RickMorty } from "./rickMorty.component";
import { routes, switchRoutes } from "../../../router";

export const RickMortyContainer: React.FC = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = React.useState<CharacterVM[]>([]);
  const [page, setPage] = React.useState(1);
  const [hasNext, setHasNext] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [debouncedSearch, setDebouncedSearch] = React.useState(search);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);

  React.useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  React.useEffect(() => {
    getCharacters(page, debouncedSearch).then((data) => {
      setCharacters(data.characters);
      setHasNext(data.hasNext);
    });
  }, [page, debouncedSearch]);

  const onNavigateGithub = () => {
    navigate(switchRoutes.list);
  };

  const onNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const onPreviousPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const onNavigateDetail = (id: number) => {
    navigate(routes.rickMortyDetail(id));
  };

  return (
    <RickMorty
      characters={characters}
      page={page}
      hasNext={hasNext}
      search={search}
      onSearch={setSearch}
      onNavigateGithub={onNavigateGithub}
      onPreviousPage={onPreviousPage}
      onNextPage={onNextPage}
      onNavigateDetail={onNavigateDetail}
    />
  );
};
