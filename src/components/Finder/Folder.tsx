interface FolderProps {
  folder: Folder;
  changeFolder: (folder: Folder) => () => void;
}

export const Folder = ({ folder, changeFolder }: FolderProps) => {
  return (
    <div
      className="flex w-20 flex-col items-center text-center"
      onClick={changeFolder(folder)}
    >
      <div className="h-14 w-16 bg-blue-300"></div>
      <h3 className="text-[#ddddde]">{folder.name}</h3>
    </div>
  );
};
