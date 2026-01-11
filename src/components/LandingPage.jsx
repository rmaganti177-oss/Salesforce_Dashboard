import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="layout">
      <Navbar />

      <div className="collection">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
