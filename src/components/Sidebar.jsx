import { Link } from "react-router-dom";
import { FcSalesPerformance } from "react-icons/fc";
import { MdAccountBalance } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">

        <li className="menu-item">
          <MdAccountBalance size={28} />
          <Link to="/accounts">Accounts</Link>
        </li>

        <li className="menu-item">
          <FcSalesPerformance size={28} />
          <Link to="/sales">Sales</Link>
        </li>

        <li className="menu-item">
          <GrServices size={28} />
          <Link to="/service">Service</Link>
        </li>

        <li className="menu-item">
          <MdOutlineRecordVoiceOver size={28} />
          <Link to="/marketing">Marketing</Link>
        </li>

        <li className="menu-item">
          <GiCommercialAirplane size={28} />
          <Link to="/commerce">Commerce</Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
