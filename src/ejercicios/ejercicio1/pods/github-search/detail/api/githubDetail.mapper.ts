import * as apiModel from "./api.model";
import * as vm from "../githubDetail.vm";

export const mapGithubDetailEntityToVM = (
  member: apiModel.GithubDetailEntity,
): vm.GithubDetailVM => ({
  id: member.id,
  login: member.login,
  avatarUrl: member.avatar_url,
  name: member.name,
  company: member.company,
  bio: member.bio,
  followers: member.followers,
  following: member.following,
  publicRepos: member.public_repos,
});
