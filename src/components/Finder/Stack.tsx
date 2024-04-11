import { Folder } from "./Folder";
import { ProjectFolder } from "./ProjectFolder";

interface StackProps {
  stack: Stack | Project;
  changeFolder: (folder: Folder) => () => void;
  changeCode: (repo: string) => () => void;
}

export const Stack = ({ stack, changeFolder, changeCode }: StackProps) => {
  return (
    <div className="w-full">
      <h2 className="border-b border-[#403b46] px-4 py-1 font-bold capitalize text-[#9b9a9e]">
        {stack.name}
      </h2>
      {stack.type === "project" ? (
        <ProjectFolder project={stack} changeCode={changeCode} />
      ) : (
        <div className="flex gap-6 p-4">
          {stack.items.map((item) => {
            return (
              <Folder
                key={item.name}
                changeFolder={changeFolder}
                folder={item}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
