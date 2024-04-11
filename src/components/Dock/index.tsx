import finderIcon from "../../assets/icons/finder.svg";
import chromeIcon from "../../assets/icons/chrome.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import freecodecampIcon from "../../assets/icons/freecodecamp.svg";
import emailIcon from "../../assets/images/email.png";
import vscodeIcon from "../../assets/images/vscode.png";
import binIcon from "../../assets/images/bin-empty.png";
import { DockItem } from "./DockItem";
import { DockLink, DockLinkProps } from "./DockLink";
import { DockApp, DockAppProps } from "./DockApp";

type DockProps = {
  openFuncs: { [k: string]: () => void };
};

export const Dock = ({ openFuncs }: DockProps) => {
  const dockItems: DockAppProps[] = [
    {
      icon: finderIcon,
      name: "Finder",
      openFunc: openFuncs.finder,
    },
    {
      icon: chromeIcon,
      name: "Chrome",
      openFunc: openFuncs.chrome,
    },
    {
      icon: vscodeIcon,
      name: "Visual Studio Code",
      openFunc: openFuncs.VSCode,
    },
  ];

  const dockLinks: DockLinkProps[] = [
    {
      icon: githubIcon,
      name: "GitHub",
      href: "https://github.com/kabirseth4",
    },
    {
      icon: linkedinIcon,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kabirseth4/",
    },
    {
      icon: freecodecampIcon,
      name: "freeCodeCamp",
      href: "https://www.freecodecamp.org/kabirseth4",
    },
    {
      icon: emailIcon,
      name: "Email",
      href: "mailto:kabirseth4@gmail.com",
    },
  ];

  return (
    <div className="absolute bottom-11 left-2/4 flex h-20 w-max -translate-x-1/2 transform gap-3 rounded-2xl border border-gray-600/40 bg-gray-700/20 px-3 py-2 backdrop-blur-2xl">
      {dockItems.map(({ icon, name, openFunc }, i) => {
        return <DockApp key={i} icon={icon} name={name} openFunc={openFunc} />;
      })}
      {dockLinks.map(({ icon, name, href }, i) => {
        return <DockLink key={i} icon={icon} name={name} href={href} />;
      })}
      <div className="border-l border-gray-300/40" />
      <DockItem icon={binIcon} name={"Bin"} rounded={false} />
    </div>
  );
};
