import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='min-vh-100'>
      <h1 style={{textAlign:"center", marginTop:"2.5rem", fontSize:"36px"}}>Login Form</h1>
      <div className='mt-5 p-5 w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded'>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Enter a UserName</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter a name here"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Enter a Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="XXXXXXX"/>
      </div>

      <NavLink to={'/'} className="btn btn-outline-success w-100" type="submit">Submit</NavLink>
      </div>
    
    
    </div>
  )
}

export default Login