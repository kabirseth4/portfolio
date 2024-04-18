import { useDesktop } from "../../hooks/useDesktop";
import { MenuBar } from "../MenuBar";
import { DesktopFolders } from "./DesktopFolders";
import { Dock } from "../Dock";
import { ToastContainer, Slide } from "react-toastify";

export const Desktop = () => {
  const { apps, changeFolder, dockOpenFuncs } = useDesktop();

  return (
    <div className="h-full w-full bg-monterey-dark bg-cover bg-center">
      <MenuBar />
      <div className="relative h-full w-full">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={true}
          theme="dark"
          transition={Slide}
          stacked
        />
        {apps.map(({ isOpen, content }) => {
          if (isOpen) return content;
        })}
        <DesktopFolders changeFolder={changeFolder} />
        <Dock openFuncs={dockOpenFuncs} />
      </div>
    </div>
  );
};
