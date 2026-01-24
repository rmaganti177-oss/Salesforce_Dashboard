import Login from "../forms/Login";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import './LandingPage.css'
import Accounts from "../forms/Accounts";

const LandingPage = () => {
  return (
    <div className="layout">
      <Navbar />

      
        <Sidebar />
       
      
      {/* <Accounts/> */}
    </div>
  );
};

export default LandingPage;
