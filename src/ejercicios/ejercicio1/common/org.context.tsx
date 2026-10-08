import React from "react";

interface OrgContextModel {
  org: string;
  setOrg: (org: string) => void;
}

export const OrgContext = React.createContext<OrgContextModel>({
  org: "lemoncode",
  setOrg: () => {},
});

export const OrgProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [org, setOrg] = React.useState("lemoncode");

  return (
    <OrgContext.Provider value={{ org, setOrg }}>
      {children}
    </OrgContext.Provider>
  );
};
