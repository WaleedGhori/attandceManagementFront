import React, { useState } from 'react'
import { NavLink,  useNavigate  } from 'react-router-dom'

const Login = () => {
  const [name , setName] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();
  const handleChange = (e)=>{
    if(e.target.name==="name"){setName(e.target.value)}
    if(e.target.name==="password"){setPassword(e.target.value)}
  }
  const handleClick = async(e)=>{
    e.preventDefault();
    const data = {name , password}
    const res  = await fetch('http://localhost:5000/api/auth/Login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    const response = await res.json()
      setName("")
      setPassword("")
      if(response.success){
        window.localStorage.setItem("authToken" , JSON.stringify(response.authtoken))
        navigate("/");
      }
      else{
        alert("Invalid Credentials")
      }
  }
  return (
    <div className='min-vh-100'>
      <h1 style={{textAlign:"center", marginTop:"2.5rem", fontSize:"36px"}}>Login Form</h1>
      <div className='mt-5 p-5 w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded'>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Enter a UserName</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter a name here" name='name' value={name } onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Enter a Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="XXXXXXX" name='password' value={password} onChange={handleChange}/>
      </div>

      <NavLink  className="btn btn-outline-success w-100" onClick={handleClick} type="submit">Submit</NavLink>
      </div>
    
    
    </div>
  )
}

export default Login