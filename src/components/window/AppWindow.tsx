import { ReactElement } from "react";
import { TrafficLights, TrafficLightsProps } from "./TrafficLights";

interface AppWindowProps extends TrafficLightsProps {
  children: ReactElement;
}

export const AppWindow = ({ children, closeFunc }: AppWindowProps) => {
  return (
    <div className="absolute h-3/4 w-3/4 overflow-hidden rounded-md border border-gray-600">
      <TrafficLights closeFunc={closeFunc} />
      {children}
    </div>
  );
};
