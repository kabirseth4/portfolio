import { MenuBar } from "../components/menu-bar/MenuBar";
import { Dock } from "../components/dock/Dock";
import { VSCode } from "../components/apps/VSCode";
import { useVSCode } from "../hooks/useVSCode";

export const Desktop = () => {
  const { currentRepo, VSCodeActive, openVSCode, closeVSCode } = useVSCode();

  const dockOpenFuncs = {
    VSCode: openVSCode,
  };

  return (
    <div className="h-full w-full bg-desktop-dark bg-cover bg-center">
      <MenuBar />
      <div className="relative h-full w-full">
        {VSCodeActive && <VSCode repo={currentRepo} closeFunc={closeVSCode} />}
        <Dock openFuncs={dockOpenFuncs} />
      </div>
    </div>
  );
};
