import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "./main"; 
import {  useNavigate } from "react-router-dom";
import './css/admin.css'
const Admin =()=>{
    const [data,setdata]=useState({aid:"",aemail:"", apassword:""});
    let x = 2000020100023;
    let y = "avdheshmudgal001";
    let z = 12345678;
    const {dispatch} =useContext(MyContext);
    const nav =  useNavigate();
    const handlechange =(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    
    }
    const handleclick =()=>{
        const { aid , aemail ,apassword} =data;
        if ( parseInt(aid) === x &&
        aemail.trim() === y.trim() &&
        parseInt(apassword) === z ) {

       dispatch({type:'update',payload:{...data,Admin:true}})
       nav("/newpatient")
            
        } else {
           alert("invalid details ")
        }

    }
    return(<>
         <h2 className="lh2">Admin login</h2>
        <div className="adminm">
        
        <div>
            <input className="inputv" type="text" name="aid" value={data.aid} placeholder="i'd" onChange={handlechange} /> <br /><br />
            <input className="inputv" type="email" name="aemail" value={data.aemail} placeholder="email" onChange={handlechange} /> <br /><br />
            <input className="inputv" type="pasword" name="apassword" value={data.apassword} placeholder="password" onChange={handlechange} /> <br /><br />
            <button  onClick={handleclick}>LogIn</button>
        </div>
        </div>
        </>
    );
}
export default Admin;