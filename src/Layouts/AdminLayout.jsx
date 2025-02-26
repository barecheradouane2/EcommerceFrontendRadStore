import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-8 ">
    
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
