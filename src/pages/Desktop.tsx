import { MenuBar } from "../components/MenuBar";
import { Dock } from "../components/Dock";
import { VSCode } from "../components/VSCode";
import { useVSCode } from "../hooks/useVSCode";
import { useFinder } from "../hooks/useFinder";
import { Finder } from "../components/Finder";

export const Desktop = () => {
  const { VSCodeStates, VSCodeActions } = useVSCode();
  const { finderStates, finderActions } = useFinder();

  const windows = [
    {
      name: "VSCode",
      isOpen: VSCodeStates.isActive,
      element: (
        <VSCode
          key="VSCode"
          code={VSCodeStates.currentCode}
          windowControls={{ close: VSCodeActions.close }}
        />
      ),
    },
    {
      name: "Finder",
      isOpen: finderStates.isActive,
      element: (
        <Finder
          key="Finder"
          folder={finderStates.currentFolder}
          changeFolder={finderActions.changeFolder}
          changeCode={VSCodeActions.changeCode}
          disableNavButtons={finderStates.disableNavButtons}
          navigation={{
            back: finderActions.goBack,
            forward: finderActions.goForward,
          }}
          windowControls={{ close: finderActions.close }}
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
