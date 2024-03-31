import { Dock } from "../components/dock/Dock";
import { MenuBar } from "../components/menu-bar/MenuBar";
import { VSCode } from "../components/apps/VSCode";

export const Desktop = () => {
  return (
    <div className="relative h-full w-full bg-desktop-dark bg-cover bg-center">
      <MenuBar />
      <VSCode />
      <Dock />
    </div>
  );
};
