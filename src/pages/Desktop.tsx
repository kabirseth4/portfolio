import { MenuBar } from "../components/menu-bar/MenuBar";
import { Dock } from "../components/dock/Dock";
import { VSCode } from "../components/apps/VSCode";
import { useVSCode } from "../hooks/useVSCode";
import { useFinder } from "../hooks/useFinder";
import { Finder } from "../components/Finder";

export const Desktop = () => {
  const { currentRepo, VSCodeActive, openVSCode, closeVSCode } = useVSCode();
  const { currentFolder, changeFolder, finderActive, openFinder, closeFinder } =
    useFinder();

  const dockOpenFuncs = {
    finder: openFinder,
    VSCode: openVSCode,
  };

  return (
    <div className="bg-monterey-dark h-full w-full bg-cover bg-center">
      <MenuBar />
      <div className="relative h-full w-full">
        {VSCodeActive && <VSCode repo={currentRepo} closeFunc={closeVSCode} />}
        {finderActive && (
          <Finder
            folder={currentFolder}
            changeFolder={changeFolder}
            closeFunc={closeFinder}
          />
        )}
        <Dock openFuncs={dockOpenFuncs} />
      </div>
    </div>
  );
};
