import { AppWindow } from "../window/AppWindow";
import { TrafficLightsProps } from "../window/TrafficLights";

interface VSCodeProps extends TrafficLightsProps {
  repo: string;
}

export const VSCode = ({ repo, closeFunc }: VSCodeProps) => {
  return (
    <AppWindow closeFunc={closeFunc}>
      <embed
        className="h-full w-full"
        src={`https://github1s.com/kabirseth4/${repo}/`}
      />
    </AppWindow>
  );
};
