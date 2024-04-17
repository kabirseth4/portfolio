import { useDesktop } from "../hooks/useDesktop";
import { MenuBar } from "../components/MenuBar";
import { Dock } from "../components/Dock";

export const Desktop = () => {
  const { apps, dockOpenFuncs } = useDesktop();

  return (
    <div className="h-full w-full bg-monterey-dark bg-cover bg-center">
      <MenuBar />
      <div className="relative h-full w-full">
        {apps.map(({ isOpen, content }) => {
          if (isOpen) return content;
        })}
        <Dock openFuncs={dockOpenFuncs} />
      </div>
    </div>
  );
};
