import { Dock } from "../components/Dock/Dock";
import { MenuBar } from "../components/MenuBar/MenuBar";

export const Desktop = () => {
  return (
    <div className="w-full h-full bg-desktop-dark bg-center bg-cover relative">
      <MenuBar />
      <Dock />
    </div>
  );
};
