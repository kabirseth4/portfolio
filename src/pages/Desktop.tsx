import { MenuBar } from "../components/MenuBar";
import { Dock } from "../components/Dock";
import { VSCode } from "../components/VSCode";
import { useVSCode } from "../hooks/useVSCode";
import { useFinder } from "../hooks/useFinder";
import { Finder } from "../components/Finder";
import { useState } from "react";

export const Desktop = () => {
  const [windowOrder, setWindowOrder] = useState(["VSCode", "Finder"]);

  const { VSCodeStates, VSCodeActions } = useVSCode(setWindowOrder);
  const { finderStates, finderActions } = useFinder(setWindowOrder);

  const windows = [
    {
      name: "VSCode",
      isOpen: VSCodeStates.isActive,
      element: (
        <VSCode
          key="VSCode"
          code={VSCodeStates.currentCode}
          isFocused={windowOrder.indexOf("VSCode") === windowOrder.length - 1}
          zIndex={windowOrder.indexOf("VSCode")}
          windowControls={{
            close: VSCodeActions.close,
            focus: VSCodeActions.focus,
          }}
        />
      ),
    },
    {
      name: "Finder",
      isOpen: finderStates.isActive,
      element: (
        <Finder
          key="Finder"
          zIndex={windowOrder.indexOf("Finder")}
          folder={finderStates.currentFolder}
          changeFolder={finderActions.changeFolder}
          changeCode={VSCodeActions.changeCode}
          disableNavButtons={finderStates.disableNavButtons}
          navigation={{
            back: finderActions.goBack,
            forward: finderActions.goForward,
          }}
          windowControls={{
            close: finderActions.close,
            focus: finderActions.focus,
          }}
        />
      ),
    },
  ];

  return (
    <div className="h-full w-full bg-monterey-dark bg-cover bg-center">
      <MenuBar />
      <div className="relative h-full w-full">
        {windows.map(({ isOpen, element }) => {
          if (isOpen) return element;
        })}
        <Dock
          openFuncs={{
            finder: finderActions.open,
            VSCode: VSCodeActions.open,
          }}
        />
      </div>
    </div>
  );
};
