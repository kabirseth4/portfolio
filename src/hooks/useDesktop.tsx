import { useState } from "react";
import { useVSCode } from "./useVSCode";
import { useFinder } from "./useFinder";
import { VSCode } from "../components/VSCode";
import { Finder } from "../components/Finder";
import { notifyWIP } from "../components/Notification";

export const useDesktop = () => {
  const [windowOrder, setWindowOrder] = useState(["Finder", "VSCode"]);

  const vSCode = useVSCode(setWindowOrder);
  const finder = useFinder(setWindowOrder);

  const apps: { name: string; isOpen: boolean; content: JSX.Element }[] = [
    {
      name: "VSCode",
      isOpen: vSCode.state.isActive,
      content: (
        <VSCode
          key="VSCode"
          code={vSCode.state.currentCode}
          isFocused={windowOrder.indexOf("VSCode") === windowOrder.length - 1}
          zIndex={windowOrder.indexOf("VSCode") + 1}
          windowControls={{
            close: vSCode.actions.close,
            focus: vSCode.actions.focus,
          }}
        />
      ),
    },
    {
      name: "Finder",
      isOpen: finder.state.isActive,
      content: (
        <Finder
          key="Finder"
          zIndex={windowOrder.indexOf("Finder") + 1}
          folder={finder.state.currentFolder}
          changeFolder={finder.actions.changeFolder}
          changeCode={vSCode.actions.changeCode}
          disableNavButtons={finder.state.disableNavButtons}
          navigation={{
            back: finder.actions.goBack,
            forward: finder.actions.goForward,
          }}
          windowControls={{
            close: finder.actions.close,
            focus: finder.actions.focus,
          }}
        />
      ),
    },
  ];

  const { changeFolder } = finder.actions;

  const dockOpenFuncs: { [name: string]: () => void } = {
    finder: finder.actions.open,
    chrome: notifyWIP,
    VSCode: vSCode.actions.open,
  };

  return { apps, changeFolder, dockOpenFuncs };
};
