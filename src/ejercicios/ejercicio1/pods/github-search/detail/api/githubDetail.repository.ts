import * as api from "./api";
import * as mapper from "./githubDetail.mapper";

export const getGithubMember = async (login: string) =>
  api.getGithubMember(login).then(mapper.mapGithubDetailEntityToVM);
