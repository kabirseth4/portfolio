import { MenuBar } from "../components/MenuBar";
import { Dock } from "../components/Dock";
import { VSCode } from "../components/VSCode";
import { useVSCode } from "../hooks/useVSCode";
import { useFinder } from "../hooks/useFinder";
import { Finder } from "../components/Finder";

export const Desktop = () => {
  const { currentRepo, changeCode, VSCodeActive, openVSCode, closeVSCode } =
    useVSCode();
  const {
    currentFolder,
    changeFolder,
    finderNav,
    disableFinderNavBtns,
    finderActive,
    openFinder,
    closeFinder,
  } = useFinder();

  const dockOpenFuncs = {
    finder: openFinder,
    VSCode: openVSCode,
  };

  const windows = [
    {
      isOpen: VSCodeActive,
      element: <VSCode repo={currentRepo} closeFunc={closeVSCode} />,
    },
    {
      isOpen: finderActive,
      element: (
        <Finder
          folder={currentFolder}
          changeFolder={changeFolder}
          changeCode={changeCode}
          disableNavButtons={disableFinderNavBtns}
          navigation={finderNav}
          closeFunc={closeFinder}
        />
      ),
    },
  ];

  return (
    <div className="h-full w-full bg-monterey-dark bg-cover bg-center">
      <MenuBar />
      <div className="relative h-full w-full">
        {windows.map((window) => {
          if (window.isOpen) return window.element;
        })}
        <Dock openFuncs={dockOpenFuncs} />
      </div>
    </div>
  );
};
