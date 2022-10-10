
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Homepage from './Components/Homepage';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Route, Routes, useNavigate} from "react-router-dom"
import AddUsers from './Components/Users/AddUsers';
import EditUsers from './Components/Users/EditUsers';
import ViewUsers from './Components/Users/ViewUsers';
import Login from './Components/Login&Siginup/Login';
import { useEffect, useState } from 'react';
import ProtectedRoutes from './ProtectedRoutes';



function App() {
  
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <>
    
    <Router>
    
      
      
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
        <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route  exact path="/homepage" element={<Homepage/>} />
          <Route  exact path="/Contact" element={<Contact/>} />
          <Route  exact path="/About" element={<About/>} />
          <Route  exact path="/users/add" element={<AddUsers/>} />
          <Route  exact path="/users/edit/:id" element={<EditUsers/>} />
          <Route  exact path="/users/view/:id" element={<ViewUsers/>} />
        </Routes>
      </Router>
      
    </>

  );
}

export default App;
