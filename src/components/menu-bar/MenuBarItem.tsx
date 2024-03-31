type MenuBarItemProps = {
  icon: string;
  iconAlt: string;
};

export const MenuBarItem = ({ icon, iconAlt }: MenuBarItemProps) => {
  return (
    <button className="hover:bg-gray-900/40 rounded px-2 py-1">
      <img src={icon} alt={iconAlt} className="h-5" />
    </button>
  );
};
