import { desktop } from "../../data/folders/desktop";
import { DesktopStack } from "./DesktopStack";

export const DesktopFolders = () => {
  return (
    <div className="absolute right-0 top-0 flex h-5/6 flex-col flex-wrap-reverse gap-4 px-4 py-3">
      {desktop.stacks.map((stack) => {
        if (stack.type === "stack")
          return <DesktopStack key={stack.name} stack={stack} />;
      })}
    </div>
  );
};
