import { Window } from "../Window";
import { WindowControls } from "../Window/WindowControls";
import { FinderNavButtons } from "./FinderNavButtons";
import { Folder } from "./Folder";
import { ProjectFolder } from "./ProjectFolder";
import { Stack } from "./Stack";

interface FinderProps {
  zIndex: number;
  folder: Folder;
  disableNavButtons: {
    back: boolean;
    forward: boolean;
  };
  changeFolder: (folder: Folder) => () => void;
  changeCode: (repo: string) => (e: React.MouseEvent<HTMLElement>) => void;
  navigation: {
    back: () => void;
    forward: () => void;
  };
  windowControls: {
    close: () => void;
    focus: () => void;
  };
}

export const Finder = ({
  zIndex,
  folder,
  disableNavButtons,
  changeFolder,
  changeCode,
  navigation,
  windowControls,
}: FinderProps) => {
  return (
    <Window
      className={`left-[10%] top-8 z-[${zIndex}] h-[60%] w-[60%]`}
      onClick={windowControls.focus}
    >
      <div className="flex h-full w-full flex-col">
        <div className="flex h-12 w-full items-center gap-4 bg-[#39353d] p-4">
          <WindowControls controls={windowControls} />
          <FinderNavButtons
            navFuncs={navigation}
            disableButtons={disableNavButtons}
          />
          <h1 className="font-bold text-[#ebeaeb]">{folder.name}</h1>
        </div>
        <div className="h-full w-full overflow-scroll bg-[#231e29]">
          {folder.type === "project" ? (
            <div className="p-4">
              <ProjectFolder project={folder} changeCode={changeCode} />
            </div>
          ) : folder.stacks ? (
            folder.stacks.map((stack) => {
              return (
                <Stack
                  key={stack.name}
                  stack={stack}
                  changeFolder={changeFolder}
                  changeCode={changeCode}
                />
              );
            })
          ) : (
            <div className="p-4">
              {folder.items.map((item) => {
                return (
                  <Folder
                    key={item.name}
                    folder={item}
                    changeFolder={changeFolder}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Window>
  );
};
