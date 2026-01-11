import { Link } from "react-router-dom";
import { LiaSalesforce } from "react-icons/lia";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="Nav-section">
      <div className="Logo">
        <LiaSalesforce size={90} />
      </div>

      <div className="circle">
        <FaUserCircle size={30} />
        <Link to="/login" style={{ marginLeft: "8px", cursor: "pointer" }}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
