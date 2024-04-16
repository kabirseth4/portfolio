import { useState } from "react";
import { folders } from "../data/folders";

export const useFinder = (
  setWindowOrder: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const [isActive, setIsActive] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<Folder>(folders[0]);
  const [history, setHistory] = useState<Folders>([currentFolder]);
  const [finderIndex, setFinderIndex] = useState(0);
  const disableNavButtons = {
    back: finderIndex === 0,
    forward: finderIndex + 1 === history.length,
  };

  const focus = () => {
    setWindowOrder((windows) => {
      const index = windows.indexOf("Finder");
      if (index !== -1) {
        const updatedWindows = [
          ...windows.slice(0, index),
          ...windows.slice(index + 1),
          windows[index],
        ];
        return updatedWindows;
      }
      return windows;
    });
  };

  const open = () => {
    setIsActive(true);
    focus();
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
    open();
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
    focus,
    changeFolder,
    goBack,
    goForward,
  };

  return {
    finderStates,
    finderActions,
  };
};
