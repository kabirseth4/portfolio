export type DockItemProps = {
  icon: string;
  name: string;
};

export const DockItem = ({ icon, name }: DockItemProps) => {
  return <img src={icon} alt={name} className="h-14 rounded-xl" />;
};
