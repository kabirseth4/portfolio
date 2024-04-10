import { ReactElement } from "react";

interface AppWindowProps {
  className: string;
  children: ReactElement;
}

export const AppWindow = ({ children, className }: AppWindowProps) => {
  return (
    <div
      className={`absolute transform resize overflow-hidden rounded-xl border border-gray-600 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
