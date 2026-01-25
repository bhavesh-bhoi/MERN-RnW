import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden bg-black">
      <Navbar />

      <div className="flex-1 ml-[296px] overflow-y-auto overflow-x-hidden scrollbar-hide">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;