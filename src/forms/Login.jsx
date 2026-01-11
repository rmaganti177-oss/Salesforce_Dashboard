import React from 'react'


const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="avatar">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="user"
          />
        </div>

        <form>
          <h3>Username</h3>
          <input placeholder="Enter username" type="text" />

          <h3>Password</h3>
          <input placeholder="Enter password" type="password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
