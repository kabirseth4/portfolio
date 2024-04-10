import { useState } from "react";
import { folders } from "../data/folders";

export const useFinder = () => {
  const [finderActive, setFinderActive] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<Folder>(folders[0]);
  const [history, setHistory] = useState<Folders>([currentFolder]);
  const [finderIndex, setFinderIndex] = useState(0);
  const disableFinderNavBtns = {
    back: finderIndex === 0,
    forward: finderIndex + 1 === history.length,
  };

  const openFinder = () => {
    setFinderActive(true);
  };
  const closeFinder = () => {
    setFinderActive(false);
    setCurrentFolder(folders[0]);
  };

  const changeFolder = (folder: Folder) => () => {
    setFinderIndex((index) => {
      const newIndex = index + 1;
      setHistory((prevHistory) => [...prevHistory.slice(0, newIndex), folder]);
      return newIndex;
    });
    setCurrentFolder(folder);
  };

  const finderNav = {
    back: () => {
      setFinderIndex((index) => {
        const newIndex = index - 1;
        setCurrentFolder(history[newIndex]);
        return newIndex;
      });
    },
    forward: () => {
      setFinderIndex((index) => {
        const newIndex = index + 1;
        setCurrentFolder(history[newIndex]);
        return newIndex;
      });
    },
  };

  // const goBack = () => {
  //   setFinderIndex((index) => {
  //     const newIndex = index - 1;
  //     setCurrentFolder(history[newIndex]);
  //     return newIndex;
  //   });
  // };

  // const goForward = () => {
  //   setFinderIndex((index) => {
  //     const newIndex = index + 1;
  //     setCurrentFolder(history[newIndex]);
  //     return newIndex;
  //   });
  // };

  return {
    currentFolder,
    disableFinderNavBtns,
    changeFolder,
    finderNav,
    finderActive,
    openFinder,
    closeFinder,
  };
};
