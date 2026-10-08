import React from "react";

import { useNavigate } from "react-router-dom";
import { MemberEntity } from "./githubSearch.vm";
import { getMembers } from "./repository";
import { GithubSearch } from "./githubSearch.component";
import { routes, switchRoutes } from "../../router";
import { OrgContext } from "../../common/org.context";

export const GithubSearchContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [inputValue, setInputValue] = React.useState("lemoncode");
  const { org, setOrg } = React.useContext(OrgContext);
  const [page, setPage] = React.useState(1);
  const navigate = useNavigate();

  const pageSize = 5;

  React.useEffect(() => {
    setInputValue(org);
  }, [org]);

  React.useEffect(() => {
    getMembers(org, page, pageSize).then((members) => {
      if (members.length === 0 && page > 1) {
        setPage((prev) => prev - 1);
      } else {
        setMembers(members);
      }
    });
  }, [org, page]);

  const onSearch = () => {
    setOrg(inputValue);
    setPage(1);
  };

  const onNavigateRickMorty = () => {
    navigate(switchRoutes.rickMorty);
  };

  const onNavigateDetail = (login: string) => {
    navigate(routes.detail(login));
  };

  const onPreviousPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const onNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <GithubSearch
      members={members}
      page={page}
      pageSize={pageSize}
      inputValue={inputValue}
      setInputValue={setInputValue}
      onSearch={onSearch}
      onNavigateRickMorty={onNavigateRickMorty}
      onNavigateDetail={onNavigateDetail}
      onPreviousPage={onPreviousPage}
      onNextPage={onNextPage}
    />
  );
};
