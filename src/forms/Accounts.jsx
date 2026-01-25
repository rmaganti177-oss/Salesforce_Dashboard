import React from 'react'
import { IoMdAdd } from "react-icons/io";
import './Accounts.css'

const Accounts = () => {
  return (
    <div className="accounts-page">
  

  <div className="account">
    <IoMdAdd size={28} />
    <h3>Add User</h3>
  </div>
  <hr className="line" />
</div>

  )
}

export default Accounts
