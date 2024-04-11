import { DockItem, DockItemProps } from "./DockItem";

export interface DockLinkProps extends DockItemProps {
  href: string;
}

export const DockLink = ({
  href,
  icon,
  name,
  rounded = true,
}: DockLinkProps) => {
  return (
    <a href={href} target="_blank" className="cursor-default">
      <DockItem icon={icon} name={name} rounded={rounded} />
    </a>
  );
};
