import { FinderItem } from "./FinderItem";
import folderIcon from "../../assets/icons/folder.svg";

interface FolderProps {
  folder: Folder;
  changeFolder: (folder: Folder) => () => void;
}

export const Folder = ({ folder, changeFolder }: FolderProps) => {
  return (
    <div onClick={changeFolder(folder)}>
      <FinderItem icon={folderIcon} alt="Folder" label={folder.name} />
    </div>
  );
};
