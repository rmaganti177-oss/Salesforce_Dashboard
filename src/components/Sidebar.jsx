import React from 'react'
import { FcSalesPerformance } from "react-icons/fc"
import { MdAccountBalance } from "react-icons/md"
import { GrServices } from "react-icons/gr"
import { MdOutlineRecordVoiceOver } from "react-icons/md"
import { GiCommercialAirplane } from "react-icons/gi"

const Sidebar = ({showAcco}) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">

        <li className="menu-item">
          <MdAccountBalance size={28} />
          <span onClick={showAcco}>Accounts</span>
        </li>

        <li className="menu-item">
          <FcSalesPerformance size={28} />
          <span>Sales</span>
        </li>

        <li className="menu-item">
          <GrServices size={28} />
          <span>Service</span>
        </li>

        <li className="menu-item">
          <MdOutlineRecordVoiceOver size={28} />
          <span>Marketing</span>
        </li>

        <li className="menu-item">
          <GiCommercialAirplane size={28} />
          <span>Commerce</span>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar
