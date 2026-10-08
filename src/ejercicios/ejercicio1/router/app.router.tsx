import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  GitHubScene,
  GithubDetailScene,
  RickMortyScene,
  RickMortyDetailScene,
  LoginScene,
} from "../scenes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.list} element={<GitHubScene />} />
        <Route path={switchRoutes.detail} element={<GithubDetailScene />} />
        <Route path={switchRoutes.rickMorty} element={<RickMortyScene />} />
        <Route
          path={switchRoutes.rickMortyDetail}
          element={<RickMortyDetailScene />}
        />

        <Route path="*" element={<Navigate to={switchRoutes.root} />} />
      </Routes>
    </Router>
  );
};
