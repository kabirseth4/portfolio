import { DockItem, type DockItemProps } from "./DockItem";

export type DockLinkProps = {
  href: string;
} & DockItemProps;

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
