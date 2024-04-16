// import { useState } from "react";
import { Window } from "../Window";
import { WindowControls } from "../Window/WindowControls";

interface VSCodeProps {
  code: string;
  windowControls: {
    close: () => void;
  };
}

export const VSCode = ({ code, windowControls }: VSCodeProps) => {
  // const [isFocused, setIsFocused] = useState(false);

  return (
    <Window className="left-1/3 top-1/4 h-3/4 w-[85%] -translate-x-1/3 -translate-y-1/4">
      <div className="h-full w-full">
        {/* {!isFocused && (
          <div
            className="absolute h-full w-full bg-red-900"
            onClick={() => {
              setIsFocused(true);
              console.log("Clicked");
            }}
          />
        )} */}
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
