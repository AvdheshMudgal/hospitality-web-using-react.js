import { useContext } from "react";
import { MyContext } from "./main";
import './css/view.css'

const ViewAcc=()=>{
    const{state} = useContext(MyContext);
    return(
        
        <div className="view">
        <h2> {state.fname } {state.lname }</h2>
        <p> Id: {state.id}</p>
        <p> Email: {state.email}</p>
        
        <p> Address: {state.address}</p>
        <p> Adhar Number: {state.Anumber}</p>
        <p> Room No: {state.room}</p>
        <p> Password: {state.password}</p>
        </div>
    );
}
export default ViewAcc;