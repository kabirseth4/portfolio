import { ReactElement } from "react";

interface WindowProps {
  className: string;
  children: ReactElement;
  onClick?: () => void;
}

export const Window = ({ children, className, onClick }: WindowProps) => {
  return (
    <div
      className={`absolute transform resize overflow-hidden rounded-xl border border-gray-600 ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
