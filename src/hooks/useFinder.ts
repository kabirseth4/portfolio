import { useState } from "react";
import { folders } from "../data/folders";

export const useFinder = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<Folder>(folders[0]);
  const [history, setHistory] = useState<Folders>([currentFolder]);
  const [finderIndex, setFinderIndex] = useState(0);
  const disableNavButtons = {
    back: finderIndex === 0,
    forward: finderIndex + 1 === history.length,
  };

  const open = () => {
    setIsActive(true);
  };

  const close = () => {
    setIsActive(false);
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

  const goBack = () => {
    setFinderIndex((index) => {
      const newIndex = index - 1;
      setCurrentFolder(history[newIndex]);
      return newIndex;
    });
  };

  const goForward = () => {
    setFinderIndex((index) => {
      const newIndex = index + 1;
      setCurrentFolder(history[newIndex]);
      return newIndex;
    });
  };

  const finderStates = {
    currentFolder,
    isActive,
    disableNavButtons,
  };

  const finderActions = {
    open,
    close,
    changeFolder,
    goBack,
    goForward,
  };

  return {
    finderStates,
    finderActions,
  };
};
