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

  return { currentRepo, setCurrentRepo, VSCodeActive, openVSCode, closeVSCode };
};
