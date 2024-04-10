import {  useEffect, useState } from 'react';
import axios from 'axios';
import './css/list.css'


const PatientList = () => {
  const[list,setList]=useState([]);
  useEffect(() => {
    axios.get('https://65fd91889fc4425c6532474d.mockapi.io/user')
  .then(function (response) {
   
    setList(response.data);
  })
  }, []);
  return (
    <div className='listm'>
    {
        list.map((patient)=>{
            const{ id ,fname ,lname,phone,address,Anumber,email,password ,room } = patient;
           return <div key={id} className='view'>
            <h2> NAME = {fname  }  {lname}</h2>
            <h3> ID = {id}</h3>
            <p>
               Room no. = {room}
            </p>
            <p>
               p.number = {phone}
            </p>
            <p>
               Address =  {address}
            </p>
            <p>
              Adhar Number =  {Anumber}
            </p>
            <p>
                Email = {email}
            </p>
            <p>
               Password = {password}
            </p>
              <button>KNOW MORE</button>

           </div>

        })
    }
    </div>
    
   
  
  );
};
export default PatientList;