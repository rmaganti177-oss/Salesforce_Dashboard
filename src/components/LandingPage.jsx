import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Login from '../forms/Login'
import Accounts from '../forms/Accounts'

const LandingPage = () => {
     const [logi,setLogi] = useState(false)
     const [acco,setAcco] = useState(false)

       const loginHandler=()=>{
          setLogi(true)
          setAcco(false)
          }

        const accoHandler=()=>{
          setAcco(true)
           setLogi(false)
        }
  return (
    <div className="layout">
        <Navbar showlogin={loginHandler}/>
        <div className='collection'>
        <Sidebar showAcco={accoHandler}/>
        {logi && <Login/>}
        
         {acco && <Accounts/>}
        </div>
       
    </div>
  )
}

export default LandingPage