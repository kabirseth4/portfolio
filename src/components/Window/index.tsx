import { ReactElement } from "react";

interface WindowProps {
  className: string;
  children: ReactElement;
}

export const Window = ({ children, className }: WindowProps) => {
  return (
    <div
      className={`absolute transform resize overflow-hidden rounded-xl border border-gray-600 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
