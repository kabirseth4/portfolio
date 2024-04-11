import { useState } from "react";

export const useVSCode = () => {
  const [currentRepo, setCurrentRepo] = useState("kabirseth4/kabirseth4");
  const [VSCodeActive, setVSCodeActive] = useState(false);

  const openVSCode = () => {
    setVSCodeActive(true);
  };
  const closeVSCode = () => {
    setVSCodeActive(false);
  };

  const changeCode = (repo: string) => () => {
    setCurrentRepo(repo);
    openVSCode();
  };

  return { currentRepo, changeCode, VSCodeActive, openVSCode, closeVSCode };
};
