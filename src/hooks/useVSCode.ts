import { useState } from "react";

export const useVSCode = () => {
  const [currentCode, setCurrentCode] = useState("kabirseth4/kabirseth4");
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const open = () => {
    setIsActive(true);
  };

  const close = () => {
    setIsActive(false);
  };

  const focus = () => {
    setIsFocused(true);
  };

  const changeCode = (repo: string) => () => {
    setCurrentCode(repo);
    open();
  };

  const VSCodeStates = {
    isActive,
    isFocused,
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
