import { Window } from "../Window";
import { WindowControls } from "../Window/WindowControls";

interface VSCodeProps {
  code: string;
  isFocused: boolean;
  zIndex: number;
  windowControls: {
    close: () => void;
    focus: () => void;
  };
}

export const VSCode = ({
  code,
  isFocused,
  zIndex,
  windowControls,
}: VSCodeProps) => {
  return (
    <Window className={`left-7 top-4 z-[${zIndex}] h-3/4 w-[85%]`}>
      <div className="h-full w-full">
        {!isFocused && (
          <div
            className="absolute h-full w-full"
            onClick={windowControls.focus}
          />
        )}
        <WindowControls
          classname="absolute left-3 top-3"
          controls={windowControls}
        />
        <embed
          className="h-full w-full"
          src={`https://github1s.com/${code}/`}
        />
      </div>
    </Window>
  );
};
