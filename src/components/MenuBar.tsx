import appleLogo from "../assets/icons/apple-logo.svg";
import wifiIcon from "../assets/icons/wifi.svg";
import bluetoothIcon from "../assets/icons/bluetooth.svg";
import batteryIcon from "../assets/icons/battery-full.svg";
import controlCenterIcon from "../assets/icons/control-center.svg";
import { MenuBarClock } from "./MenuBarClock";
import { MenuBarItem } from "./MenuBarItem";

export const MenuBar = () => {
  return (
    <div className="bg-gray-600/40 lg:backdrop-blur-2xl px-2 py-1 flex items-center text-white">
      <div className="flex flex-1 items-center">
        <MenuBarItem icon={appleLogo} iconAlt="Apple logo" />
      </div>
      <div className="flex items-center">
        <MenuBarItem icon={wifiIcon} iconAlt="Wifi" />
        <MenuBarItem icon={bluetoothIcon} iconAlt="Bluetooth" />
        <MenuBarItem icon={batteryIcon} iconAlt="Full battery" />
        <MenuBarItem icon={controlCenterIcon} iconAlt="Control center" />
        <MenuBarClock />
      </div>
    </div>
  );
};
