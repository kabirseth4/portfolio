import { notifyWIP } from "../Notification";

type MenuBarItemProps = {
  icon: string;
  iconAlt: string;
};

export const MenuBarItem = ({ icon, iconAlt }: MenuBarItemProps) => {
  return (
    <button
      className="rounded px-2 py-1 hover:bg-gray-900/40"
      onClick={notifyWIP}
    >
      <img src={icon} alt={iconAlt} className="h-5" />
    </button>
  );
};
