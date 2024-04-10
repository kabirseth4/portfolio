import { AppWindow } from "../window/AppWindow";
import { TrafficLights, TrafficLightsProps } from "../window/TrafficLights";
import { FinderNavButtons } from "./FinderNavButtons";
import { Folder } from "./Folder";
import { ProjectFolder } from "./ProjectFolder";
import { Stack } from "./Stack";

interface FinderProps extends TrafficLightsProps {
  folder: Folder;
  disableNavButtons: {
    back: boolean;
    forward: boolean;
  };
  changeFolder: (folder: Folder) => () => void;
  navigation: {
    back: () => void;
    forward: () => void;
  };
}

export const Finder = ({
  folder,
  disableNavButtons,
  changeFolder,
  navigation,
  closeFunc,
}: FinderProps) => {
  return (
    <AppWindow className="left-1/2 top-1/4 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/4">
      <div className="flex h-full w-full flex-col">
        <div className="flex h-12 w-full items-center gap-4 bg-[#39353d] p-4">
          <TrafficLights closeFunc={closeFunc} />
          <FinderNavButtons
            navFuncs={navigation}
            disableButtons={disableNavButtons}
          />
          <h1 className="font-bold text-[#ebeaeb]">{folder.name}</h1>
        </div>
        <div className="h-full w-full overflow-scroll bg-[#231e29]">
          {folder.type === "project" ? (
            <ProjectFolder project={folder} />
          ) : folder.stacks ? (
            folder.stacks.map((stack) => {
              return (
                <Stack
                  key={stack.name}
                  stack={stack}
                  changeFolder={changeFolder}
                />
              );
            })
          ) : (
            folder.items.map((item) => {
              return (
                <Folder
                  key={item.name}
                  folder={item}
                  changeFolder={changeFolder}
                />
              );
            })
          )}
        </div>
      </div>
    </AppWindow>
  );
};
