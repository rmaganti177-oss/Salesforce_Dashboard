import React from 'react'
import { LiaSalesforce } from "react-icons/lia";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({showlogin}) => {
  return (
    <div className='Nav-section'>
      <div className='Logo'>
         <LiaSalesforce size={90} />
       
      </div>
      <div className='circle'>
        <FaUserCircle size={30}/>
        <span onClick={showlogin}>Login</span>
        
      </div>
    </div>
  )
}

export default Navbar
