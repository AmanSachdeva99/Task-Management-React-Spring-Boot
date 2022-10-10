import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUsers = () => {
    const[users,setUsers]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
const{name,username,email,phone,website}=users
let history=useNavigate()
const dataa=(e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
}

 const addData=async ()=>{
    await axios.post("http://localhost:9090/add",users)
    history("/homepage")

}

  return (
    <div className="container">
        <div className='w-75 mx-auto'>
    <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label" style={{fontSize:"18px",marginTop:"10px"}}>Name</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter name" name="name" onChange={dataa}/>
</div>
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>Username</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter Username" name="username" onChange={dataa}/>
</div>
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>Email</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter Email" name="email" onChange={dataa}/>
</div> 
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>Task</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter Task" name="task" onChange={dataa}/>
</div> 
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>phone</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter phone" name="phone" onChange={dataa}/>
</div> 
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>website</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter website" name="website" onChange={dataa}/>
</div> 

<button className='btn btn-success' onClick={addData}>Add</button>

</div>

    </div>
  )
}

export default AddUsers
