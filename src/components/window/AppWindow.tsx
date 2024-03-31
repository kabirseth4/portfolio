import { ReactElement } from "react";
import { TrafficLights } from "./TrafficLights";

type AppWindowProps = {
  children: ReactElement;
};

export const AppWindow = ({ children }: AppWindowProps) => {
  return (
    <div className="absolute h-3/4 w-3/4 overflow-hidden rounded-md">
      <TrafficLights />
      {children}
    </div>
  );
};
