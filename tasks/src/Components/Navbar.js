import React from 'react'
import { NavLink ,Link, useNavigate} from "react-router-dom"; 
const Navbar = ({isLoggedIn,setIsLoggedIn}) => {

  let navigate=useNavigate()
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary  ">
  <div className="container-fluid">
    <NavLink tag="a" className="navbar-brand" to="/homepage" style={{fontSize:"25px"}}>Tasks</NavLink>
  
    {isLoggedIn?
    <>
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
      <NavLink className="nav-link" tag="a"  to="/homepage">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" tag="a" to="/contact">Contact</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" tag="a" to="/about">About</NavLink>
    </li>
    
   
      
  </ul>
<Link className='btn btn-outline-light' tag="button" to="/users/add">Add user</Link>
<button className='btn btn-outline-light' style={{marginLeft:"20px"}} onClick={()=>{setIsLoggedIn(false);navigate("/")}}>LogOut</button>
</>
:
<></>
  }
      
  </div>
</nav>
       
    </div>
  )
}

export default Navbar
