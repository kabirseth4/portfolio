import { useDesktop } from "../../hooks/useDesktop";
import { MenuBar } from "../MenuBar";
import { DesktopFolders } from "./DesktopFolders";
import { Dock } from "../Dock";

export const Desktop = () => {
  const { apps, changeFolder, dockOpenFuncs } = useDesktop();

  return (
    <div className="h-full w-full bg-monterey-dark bg-cover bg-center">
      <MenuBar />
      <div className="relative h-full w-full">
        {apps.map(({ isOpen, content }) => {
          if (isOpen) return content;
        })}
        <DesktopFolders changeFolder={changeFolder} />
        <Dock openFuncs={dockOpenFuncs} />
      </div>
    </div>
  );
};
