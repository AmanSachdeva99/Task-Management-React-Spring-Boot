import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate ,useParams} from 'react-router-dom'

const EditUsers = () => {
    const[users,setUsers]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
    const {id}=useParams()
    
const{name,username,email,phone,website}=users
let history=useNavigate()
const dataa=(e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
}

 const addData=async ()=>{
    await axios.put(`http://localhost:9090/edit/${id}`,users)
    history("/homepage")

}
useEffect(()=>{
    axios.get(`http://localhost:9090/getById/${id}`)
    .then((res)=>{
        setUsers(res.data)
        

        console.log(res.data)
    })
},[])

  return (
    <div className="container">
        <div className='w-75 mx-auto'>
    <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label" style={{fontSize:"18px",marginTop:"10px"}}>Name</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter name" name="name" onChange={dataa} value={users.name}/>
</div>
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>Username</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter Username" name="username" onChange={dataa}  value={users.username}/>
</div>
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>Email</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter Email" name="email" onChange={dataa}  value={users.email}/>
</div> 
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>Task</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter Email" name="task" onChange={dataa}  value={users.task}/>
</div> 
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>phone</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter phone" name="phone" onChange={dataa}  value={users.phone}/>
</div> 
<div className="mb-3">
  <label className="form-label" style={{fontSize:"18px"}}>website</label>
  <input type="text" className="form-control form-control-lg" placeholder="Enter website" name="website" onChange={dataa}  value={users.website}/>
</div> 

<button className='btn btn-primary' onClick={addData}>Update</button>
<button className='btn btn-primary' style={{marginLeft:"10px"}}onClick={()=>{history("/homepage")}}>Back</button>

</div>

    </div>
  )
}

export default EditUsers
