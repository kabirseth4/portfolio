import appleLogo from "../assets/icons/apple-logo.svg";
import wifiIcon from "../assets/icons/wifi.svg";
import bluetoothIcon from "../assets/icons/bluetooth.svg";
import batteryIcon from "../assets/icons/battery-full.svg";
import controlCenterIcon from "../assets/icons/control-center.svg";

export const MenuBar = () => {
  return (
    <div className="bg-gray-600/40 backdrop-blur-2xl px-4 py-2 flex items-center">
      <div className="flex flex-1 items-center">
        <img src={appleLogo} alt="Apple logo" className="h-5" />
      </div>
      <div className="flex items-center gap-4">
        <img src={wifiIcon} alt="Wifi" className="h-5" />
        <img src={bluetoothIcon} alt="Bluetooth" className="h-5" />
        <img src={batteryIcon} alt="Full battery" className="h-5" />
        <img src={controlCenterIcon} alt="Control center" className="h-5" />
      </div>
    </div>
  );
};
