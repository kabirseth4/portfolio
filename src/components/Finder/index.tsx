import { AppWindow } from "../window/AppWindow";
import { TrafficLights, TrafficLightsProps } from "../window/TrafficLights";
import { Folder } from "./Folder";

interface FinderProps extends TrafficLightsProps {
  folder: Folder;
  changeFolder: (folder: Folder) => () => void;
}

export const Finder = ({ folder, changeFolder, closeFunc }: FinderProps) => {
  return (
    <AppWindow className="left-1/2 top-1/4 h-1/2 w-[60%] -translate-x-1/2 -translate-y-1/4">
      <div className="h-full w-full">
        <div className="flex h-12 w-full items-center gap-4 bg-[#39353d] px-4">
          <TrafficLights closeFunc={closeFunc} />
          <h1 className="font-bold text-[#ebeaeb]">{folder.name}</h1>
        </div>
        <div className="h-full w-full bg-[#231e29]">
          {folder.type === "project" ? (
            <div>Project</div>
          ) : folder.stacks ? (
            folder.stacks.map((stack) => {
              return stack.type === "project" ? (
                <div key={stack.name}></div>
              ) : (
                <div key={stack.name} className="w-full">
                  <h2 className="border-y border-[#403b46] px-4 py-1 font-bold text-[#9b9a9e]">
                    {stack.name}
                  </h2>
                  <div className="flex gap-6 px-2 py-3">
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
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </AppWindow>
  );
};
