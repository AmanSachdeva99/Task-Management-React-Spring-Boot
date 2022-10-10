import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link, useParams,useNavigate} from "react-router-dom"

const ViewUsers = () => {
  

  const [users,setUsers]=useState([])
const {id}=useParams()
const navigate=useNavigate()

useEffect(()=>{
    axios.get(`http://localhost:9090/getById/${id}`)
    .then((res)=>{
        setUsers(res.data)

        console.log("data",res.data)
    })
},[])

  return (
    <div className='container'>
        <div className='py-4'>
             <h1>HomePage</h1>
             </div>
             <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Task</th>
      <th scope="col">phone</th>
      <th scope="col">website</th>
     
    </tr>
  </thead>
  <tbody>
    
          <tr>
          <th scope="row">{users.id}</th>
          
      <td>{users.name}</td>
      <td>{users.username}</td>
      <td>{users.email}</td>
      <td>{users.task}</td>
      <td>{users.phone}</td>
      <td>{users.website}</td>
      <td><button className="btn btn-success" onClick={()=>{navigate("/homepage")}}>Back</button></td>
     
    </tr>
        
     
      
    
  </tbody>
</table>    
      
    </div>
  )
}

export default ViewUsers
