import { DockItem } from "./DockItem";
import finderIcon from "../../assets/icons/finder.svg";
import chromeIcon from "../../assets/icons/chrome.svg";
import recycleBinIcon from "../../assets/images/recycle-bin-empty.png";

export const Dock = () => {
  return (
    <div className="absolute bottom-1 left-2/4 w-auto transform -translate-x-1/2 h-20 border rounded-2xl border-gray-600/40 bg-gray-700/20 backdrop-blur-2xl p-2 flex gap-2">
      <DockItem icon={finderIcon} iconAlt="Finder" />
      <DockItem icon={chromeIcon} iconAlt="Chrome" />
      <div className="border-l border-gray-300/40" />
      <DockItem icon={recycleBinIcon} iconAlt="Recycle bin" />
    </div>
  );
};
