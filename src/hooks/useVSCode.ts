import { useState } from "react";

export const useVSCode = (
  setWindowOrder: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const [currentCode, setCurrentCode] = useState("kabirseth4/kabirseth4");
  const [isActive, setIsActive] = useState(false);

  const focus = () => {
    setWindowOrder((windows) => {
      const index = windows.indexOf("VSCode");
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
  };

  const changeCode = (code: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setCurrentCode(code);
    open();
  };

  const VSCodeStates = {
    isActive,
    currentCode,
  };

  const VSCodeActions = {
    open,
    close,
    focus,
    changeCode,
  };

  return { VSCodeStates, VSCodeActions };
};
