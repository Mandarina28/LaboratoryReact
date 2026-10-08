import * as api from "./api/api";
import * as mappers from "./githubSearch.mapper";

export const getMembers = async (org: string, page: number, pageSize: number) =>
  api.getMembers(org, page, pageSize).then(mappers.mapMembersEntityToVM);
