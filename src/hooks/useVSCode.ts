import { useState } from "react";

export const useVSCode = (
  setWindowOrder: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const [currentCode, setCurrentCode] = useState("kabirseth4/kabirseth4");
  const [isActive, setIsActive] = useState(true);

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
    setCurrentCode("kabirseth4/kabirseth4");
  };

  const changeCode = (code: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setCurrentCode(code);
    open();
  };

  return {
    state: {
      isActive,
      currentCode,
    },
    actions: {
      open,
      close,
      focus,
      changeCode,
    },
  };
};
