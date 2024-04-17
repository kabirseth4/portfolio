import { FinderItem } from "../Finder/FinderItem";
import folderIcon from "../../assets/icons/folder.svg";
import stackIcon from "../../assets/icons/stack.svg";
import { useState } from "react";
import { Folder } from "../Finder/Folder";

interface DesktopStackProps {
  stack: Stack;
  changeFolder: (folder: Folder) => () => void;
}

export const DesktopStack = ({ stack, changeFolder }: DesktopStackProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col flex-wrap-reverse gap-4">
        <div
          onClick={() => {
            setIsOpen((prevState) => !prevState);
          }}
        >
          {isOpen ? (
            <FinderItem
              icon={stackIcon}
              alt="Stack"
              label={stack.name[0].toUpperCase() + stack.name.slice(1)}
            />
          ) : (
            <FinderItem icon={folderIcon} alt="Folder" label={stack.name} />
          )}
        </div>
        {isOpen &&
          stack.items.map((item) => {
            return (
              // <FinderItem
              //   key={item.name}
              //   icon={folderIcon}
              //   alt="Folder"
              //   label={item.name}
              // />
              <Folder folder={item} changeFolder={changeFolder} />
            );
          })}
      </div>
      {isOpen && <div className="h-full" />}
    </>
  );
};
