import xcodeIcon from "../../assets/icons/xcode.svg";
import { toast } from "react-toastify";

export const Notification = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center">
        <img src={xcodeIcon} alt="XCode" className="h-full w-full" />
      </div>
      <div>
        <h3 className="font-bold">Work in Progress</h3>
        <p>🚧 I'm working on it. 🚧</p>
      </div>
    </div>
  );
};

export const notifyWIP = () => {
  toast(<Notification />);
};
