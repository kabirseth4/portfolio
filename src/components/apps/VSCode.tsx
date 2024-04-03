import { AppWindow } from "../window/AppWindow";

export const VSCode = () => {
  return (
    <AppWindow
      children={
        <embed
          className="h-full w-full"
          src="https://github1s.com/kabirseth4/portfolio/"
        />
      }
    />
  );
};
