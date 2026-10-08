import { GithubDetailEntity } from "./api.model";

export const getGithubMember = async (
  login: string,
): Promise<GithubDetailEntity> => {
  return fetch(`https://api.github.com/users/${login}`).then((response) =>
    response.json(),
  );
};
