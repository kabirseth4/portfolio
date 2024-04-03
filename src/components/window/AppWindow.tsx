import { ReactElement } from "react";
import { TrafficLights } from "./TrafficLights";

type AppWindowProps = {
  children: ReactElement;
};

export const AppWindow = ({ children }: AppWindowProps) => {
  return (
    <div className="absolute h-3/4 w-3/4 overflow-hidden rounded-md border border-gray-600">
      <TrafficLights />
      {children}
    </div>
  );
};
