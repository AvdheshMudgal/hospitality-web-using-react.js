import { useState } from "react";
import axios from "axios";
 import { useNavigate } from "react-router-dom";
 
 const NewPatient=()=>{
    const[data,setdata]=useState({fname:"",lname:"",phone:"",Anumber:"",address:"",email:"",room:""})
const nav=useNavigate();

    const handledata=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const handleupdate=()=>{
        axios.post('https://65fd91889fc4425c6532474d.mockapi.io/user',data)
          .then (response=>{
            console.log(response);
            nav("/")
          })
    }
    return(<>
     <h2 className="lh2">new Patient</h2>
        <div className="newm">
       
        <div className="form">
           F.NAME <input className="inputv" type="text" name="fname" placeholder="F.NAME" required value={data.fname} onChange={handledata} />
          
            L.NAME<input type="text" className="inputv"  name="lname" placeholder="L.NAME"  value={data.lname} onChange={handledata} />
          
            
          NUMBER  <input type="phone" className="inputv"  name="phone" placeholder="PHONE"  required value={data.phone} onChange={handledata}/> 
           Adhar Number <input type="phone" className="inputv"  name="Anumber" placeholder="A.NUMBER"  required value={data.Anumber} onChange={handledata}/> 
           Address <input type="text" className="inputv"  name="address" placeholder="ADDRESS"  required value={data.address} onChange={handledata} />
          
            Email<input type="text" className="inputv"  placeholder="Email" name="email"  required onChange={handledata} value={data.email} />
            Room no. <input type="text" className="inputv" placeholder="R.NO"  name="room"  required value={data.room} onChange={handledata} />
           <br />
           <br />
            
            <button onClick={handleupdate}>Add new patient</button>

        </div>
        </div>
        </>
    );
 }
 export default NewPatient;