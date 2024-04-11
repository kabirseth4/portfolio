import { MenuBar } from "../components/menu-bar/MenuBar";
import { Dock } from "../components/dock/Dock";
import { VSCode } from "../components/apps/VSCode";
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

  return (
    <div className="h-full w-full bg-monterey-dark bg-cover bg-center">
      <MenuBar />
      <div className="relative h-full w-full">
        {VSCodeActive && <VSCode repo={currentRepo} closeFunc={closeVSCode} />}
        {finderActive && (
          <Finder
            folder={currentFolder}
            changeFolder={changeFolder}
            changeCode={changeCode}
            disableNavButtons={disableFinderNavBtns}
            navigation={finderNav}
            closeFunc={closeFinder}
          />
        )}
        <Dock openFuncs={dockOpenFuncs} />
      </div>
    </div>
  );
};
