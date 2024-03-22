import { DockItemProps, DockItem } from "./DockItem";
import { DockBin } from "./DockBin";
import finderIcon from "../../assets/icons/finder.svg";
import chromeIcon from "../../assets/icons/chrome.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import freecodecampIcon from "../../assets/icons/freecodecamp.svg";
import emailIcon from "../../assets/images/email.png";
import vscodeIcon from "../../assets/images/vscode.png";

const dockItems: DockItemProps[] = [
  {
    icon: finderIcon,
    name: "Finder",
  },
  {
    icon: chromeIcon,
    name: "Chrome",
  },
  {
    icon: githubIcon,
    name: "GitHub",
  },
  {
    icon: linkedinIcon,
    name: "LinkedIn",
  },
  {
    icon: freecodecampIcon,
    name: "freeCodeCamp",
  },
  {
    icon: vscodeIcon,
    name: "VS Code",
  },
  {
    icon: emailIcon,
    name: "Email",
  },
];

export const Dock = () => {
  return (
    <div className="absolute bottom-1 left-2/4 w-auto transform -translate-x-1/2 h-20 border rounded-2xl border-gray-600/40 bg-gray-700/20 backdrop-blur-2xl py-2 px-3 flex gap-3">
      {dockItems.map((item, i) => {
        return <DockItem key={i} icon={item.icon} name={item.name} />;
      })}
      <div className="border-l border-gray-300/40" />
      <DockBin />
    </div>
  );
};
