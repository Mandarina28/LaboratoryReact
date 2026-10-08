import React from "react";
import { GlobalStyles } from "@mui/material";
import { AppRouter } from "./router";
import { OrgProvider } from "./common/org.context";

export const App = () => {
  return (
    <OrgProvider>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      <AppRouter />
    </OrgProvider>
  );
};
