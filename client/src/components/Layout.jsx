import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div class="ml-64">
        <Outlet />
      </div>
    </>
  );
}
