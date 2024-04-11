import { DockItem, DockItemProps } from "./DockItem";

export interface DockAppProps extends DockItemProps {
  openFunc: () => void;
}

export const DockApp = ({
  icon,
  name,
  rounded = true,
  openFunc,
}: DockAppProps) => {
  return (
    <div onClick={openFunc}>
      <DockItem icon={icon} name={name} rounded={rounded} />
    </div>
  );
};
