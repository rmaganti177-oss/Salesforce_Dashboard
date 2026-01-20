import { Link } from "react-router-dom";
import { LiaSalesforce } from "react-icons/lia";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <LiaSalesforce className="logo-icon" />
        <span className="brand">Salesforce</span>
      </div>

      <div className="nav-right">
        <FaUserCircle className="user-icon" />
        <Link to="/login" className="login-text">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
