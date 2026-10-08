import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { GithubDetail } from "./githubDetail.component";
import { GithubDetailVM } from "./githubDetail.vm";
import { getGithubMember } from "./api/githubDetail.repository";

export const GithubDetailContainer: React.FC = () => {
  const { login } = useParams();

  const navigate = useNavigate();

  const [member, setMember] = React.useState<GithubDetailVM | null>(null);

  React.useEffect(() => {
    if (login) {
      getGithubMember(login).then(setMember);
    }
  }, [login]);

  const onBack = () => {
    navigate("/list");
  };

  if (!member) return <p>Loading...</p>;

  return <GithubDetail member={member} onBack={onBack} />;
};
