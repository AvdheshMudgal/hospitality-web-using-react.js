import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "./main";
import { useNavigate } from "react-router-dom";

const PatientLogIn=()=>{
    const {dispatch} =useContext(MyContext);
    const [data,setdata]=useState({id:"", password:""});

    const nav =useNavigate();
    const handleGetValue =(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
       

    }
    const logIn=()=>{
        axios.get(`https://65fd91889fc4425c6532474d.mockapi.io/user?id=${data.id}&password=${data.password}`)
        .then(function (response) {
            dispatch({type:'update',payload:{...response.data[0],isLogged:true}})
         nav("/view")

         
        })
    }
    return(<>
     <h2 className="lh2">login Patient</h2>
        <div className="plogm">
       
        <div>
            
           Patient:ID <input type="text" className="inputv" name="id" value={data.id} onChange={handleGetValue}  /><br /> <br />
           Password <input type="password" className="inputv" name="password"  value={data.password} onChange={handleGetValue}/><br /> <br />
            <button onClick={logIn} >Login</button>
        </div>

        </div>
        </>
    );

}
export default PatientLogIn;