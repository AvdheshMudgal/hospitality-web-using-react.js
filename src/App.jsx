import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import PatientLogIn from "./patientlogin";
import Admin from "./admin";
import NewPatient from './newpatient';
import PatientList from './patientlist';
import Contact from './contact';
import About from './about';
import ViewAcc from './view';
import { useContext } from 'react';
import { MyContext } from './main';
import Home from './home';
import React from 'react';
import './css/App.css'
import { TfiViewListAlt } from "react-icons/tfi";


const App=()=>{
  
  const {state}=useContext(MyContext);

  const handletoggle=()=>{
    const navbb = document.getElementById('navbar');
    if (navbb.classList.contains('show')) {
      navbb.classList.remove('show');
    } else {
      navbb.classList.add('show');
    }

  }
  

  return(




    <div  className="nav">
      <div className="hname">
       
    <h2 className='name'>Ever <span> well</span>  +Hos<span>pital</span></h2></div>
   
    <TfiViewListAlt  className='btnf' onClick={handletoggle}/>
<div>
  
    <Router>
      <div id="navbar" className='navbar'>
    <Link to="/" className='link' >Home</Link>
    

      {
        state.isLogged ?
        <>
       
     
      <Link to="/about" className='link'>About Us</Link>
      <Link to="/contact" className='link'>Contact Us</Link> 
      <Link to="/view" className='link'>Details About Me</Link>
     
        </>
        :
        <>
       
            <Link to="/patient" className='link'>patient</Link>
            <Link to="/admin" className='link'>admin</Link>
            <Link to="/about" className='link'>About Us</Link>
      <Link to="/contact" className='link'>Contact Us</Link> 
        </>
      }
      
      {
        state.Admin?<>
     
       <Link to="/newpatient" className='link'>newpatient</Link>
      <Link to="/patientlist" className='link'>patientlist</Link>
        </>
        :
        <>
       
     

        </>      
      }
     </div> 
<Routes>
 
<Route path="/patient" element={<PatientLogIn/>}>patient</Route>
<Route path="/admin" element={<Admin/>}>admin</Route>
<Route path="/newpatient" element={<NewPatient/>}>admin</Route>
<Route path="/patientlist" element={<PatientList/>}>admin</Route>
<Route path="/about" element={<About/>}>About Us</Route>
<Route path="/contact" element={<Contact/>}>Contact Us</Route>
<Route path="/view" element={<ViewAcc/>}>Details About Me</Route>
<Route path="/" element={<Home/>}>Home</Route>
</Routes>

    </Router>
    </div>
    <div className="mark">@avdheshmudgal</div>
    </div>
    
  );
}
export default App;