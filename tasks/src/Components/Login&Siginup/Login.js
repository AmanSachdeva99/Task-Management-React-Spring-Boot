import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
const Login = (props) => {
  
  const navigate=useNavigate()
   


function handleCallbackRespone(res){
console.log("Encoded Jwt token:"+res.credential )
var userObject=jwt_decode(res.credential)
console.log(userObject)

if(userObject){
 navigate("/homepage")
 props.setIsLoggedIn(true) 
}
else{
  setStatus(true)
}

}

useEffect(()=>{  
  window.google.accounts.id.initialize({
    client_id:"1038859766881-8mnt3f99qegdhe1tmk08fti77rc2e3sp.apps.googleusercontent.com",
    callback: handleCallbackRespone
  })

window.google.accounts.id.renderButton(
 document.getElementById('sigInDiv'),
  {theme:"outline",size:"large"}
)

},[])



    let temp=""
    const [data,setData]=useState([])
  
    const [status,setStatus]=useState()
    const[loginStatus,setLoginStatus]=useState()


   
    const dataa=(e)=>{
       setData({...data,[e.target.name]:e.target.value})
    }

     const check=async ()=>{
      await axios.post('http://localhost:9090/check',data).
      then(res=>{
       console.log(res.data)
       setLoginStatus(res.data)
       if(res.data){
        console.log("Logged In")
        navigate("/homepage")
        props.setIsLoggedIn(true)
       }
       else{
        setStatus(true)
      }
            })
           
          }
         

   
  return (
    <div>
        
      <div className="container">
        
        <div className='w-75 mx-auto'>
    <div className="mb-3">
    <h1>Login</h1>
  
</div>
<div className="mb-3">
    {status && <h5>Username and password does not exist</h5>}
  <label className="form-label" style={{fontSize:"18px"}}>Username</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter Username" name="username" onChange={dataa} autoComplete="off"/>
</div>
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>password</label>
  <input type="password" className="form-control form-control-lg" placeholder="Enter Password" name="password" onChange={dataa}/>
</div> 


  <button className='btn btn-success' onClick={check} style={{marginBottom:"10px"}}>Login</button>
  <div id="sigInDiv"></div>

  </div>

      </div>
    </div>
  )
}

export default Login
