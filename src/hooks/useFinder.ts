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
    setCurrentFolder(folders[0]);
  };

  const changeFolder = (folder: Folder) => () => {
    setCurrentFolder(folder);
  };

  return {
    currentFolder,
    changeFolder,
    finderActive,
    openFinder,
    closeFinder,
  };
};
