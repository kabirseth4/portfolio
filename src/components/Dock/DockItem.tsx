import { useState } from "react";

export type DockItemProps = {
  icon: string;
  name: string;
  rounded?: boolean;
};

export const DockItem = ({ icon, name, rounded = true }: DockItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative flex h-14 w-14 justify-center">
      {isHovering && <div className="dock-tooltip">{name}</div>}
      <img
        src={icon}
        alt={name}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`h-full ${rounded ? "rounded-xl" : ""}`}
      />
    </div>
  );
};
