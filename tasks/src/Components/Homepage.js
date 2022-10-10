import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link} from "react-router-dom"

const Homepage = () => {
  
  const [users,setUsers]=useState([])
useEffect(()=>{
getData()
 
},[])
function getData(){
  axios.get("http://localhost:9090/getAll")
  .then((res)=>{
    setUsers(res.data)
    console.log(res.data)
  })
}

const delteIt=(id)=>{
  axios.delete(`http://localhost:9090/delete/${id}`)
  .then(()=>{
    getData()
  })
}

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
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
      {users?.map((u)=>{
        return(
          <tr key={u.id}>
          <th scope="row">{u.id}</th>
      <td>{u.name}</td>
      <td>{u.username}</td>
      <td>{u.email}</td>
      <td>{u.task}</td>
      <td><Link type="button" className="btn btn-success" style={{marginRight:"10px"}} to={`/users/view/${u.id}`}>View</Link>
      <Link type="button" className="btn btn-primary" style={{marginRight:"10px"}} to={`/users/edit/${u.id}`}>Update</Link>
      <Link type="button" className="btn btn-secondary" onClick={()=>{delteIt(u.id)}}>Delete</Link></td>
    </tr>
        )
      })}
      
    
  </tbody>
</table>    
      
    </div>
  )
}

export default Homepage
