import { ReactElement } from "react";

interface AppWindowProps {
  className: string;
  children: ReactElement;
}

export const AppWindow = ({ children, className }: AppWindowProps) => {
  return (
    <div
      className={`absolute transform overflow-hidden rounded-md border border-gray-600 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
