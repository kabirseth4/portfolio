import { DockItemProps, DockItem } from "./DockItem";
import finderIcon from "../../assets/icons/finder.svg";
import chromeIcon from "../../assets/icons/chrome.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import freecodecampIcon from "../../assets/icons/freecodecamp.svg";
import emailIcon from "../../assets/images/email.png";
import vscodeIcon from "../../assets/images/vscode.png";
import binIcon from "../../assets/images/bin-empty.png";

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
    <div className="absolute bottom-1 left-2/4 flex h-20 w-max -translate-x-1/2 transform gap-3 rounded-2xl border border-gray-600/40 bg-gray-700/20 px-3 py-2 backdrop-blur-2xl">
      {dockItems.map((item, i) => {
        return <DockItem key={i} icon={item.icon} name={item.name} />;
      })}
      <div className="border-l border-gray-300/40" />
      <DockItem icon={binIcon} name={"Bin"} rounded={false} />
    </div>
  );
};
