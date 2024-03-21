type DockItemProps = {
  icon: string;
  iconAlt: string;
};

export const DockItem = ({ icon, iconAlt }: DockItemProps) => {
  return <img src={icon} alt={iconAlt} className="h-14 rounded-xl" />;
};
