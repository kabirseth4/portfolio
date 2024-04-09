import { useState } from "react";
import { folders } from "../data/folders";

export const useFinder = () => {
  const [currentFolder, setCurrentFolder] = useState(folders[0]);
  const [finderActive, setFinderActive] = useState(false);

  const openFinder = () => {
    setFinderActive(true);
  };
  const closeFinder = () => {
    setFinderActive(false);
  };

  return {
    currentFolder,
    setCurrentFolder,
    finderActive,
    openFinder,
    closeFinder,
  };
};
