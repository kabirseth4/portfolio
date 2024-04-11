import { Window } from "../Window";
import { WindowControlsProps, WindowControls } from "../Window/WindowControls";

interface VSCodeProps extends WindowControlsProps {
  repo: string;
}

export const VSCode = ({ repo, closeFunc }: VSCodeProps) => {
  return (
    <Window className="left-1/3 top-1/4 h-3/4 w-[85%] -translate-x-1/3 -translate-y-1/4">
      <div className="h-full w-full">
        <WindowControls
          classname="absolute left-3 top-3"
          closeFunc={closeFunc}
        />
        <embed
          className="h-full w-full"
          src={`https://github1s.com/${repo}/`}
        />
      </div>
    </Window>
  );
};
