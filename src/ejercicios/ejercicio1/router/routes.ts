import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
  rickMorty: string;
  rickMortyDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:login",

  rickMorty: "/rick-morty",
  rickMortyDetail: "/rick-morty/:id",
};

interface Routes extends Omit<SwitchRoutes, "detail" | "rickMortyDetail"> {
  detail: (login: string) => string;
  rickMortyDetail: (id: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,

  detail: (login: string) => generatePath(switchRoutes.detail, { login }),

  rickMortyDetail: (id: number) =>
    generatePath(switchRoutes.rickMortyDetail, { id: String(id) }),
};
