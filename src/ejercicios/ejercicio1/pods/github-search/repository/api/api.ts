import { MemberEntity } from "./api.model";

export const getMembers = async (
  org: string,
  page: number,
  pageSize: number,
): Promise<MemberEntity[]> => {
  return fetch(
    `https://api.github.com/orgs/${org}/members?page=${page}&per_page=${pageSize}`,
  ).then((response) => response.json());
};
