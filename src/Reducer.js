const is={id:"",password:"", fname:"",lname:"",phone:"",Anumber:"",address:"",email:"",room:"",isLogged:false , aid:"",aemail:"",apassword:"" ,admin:false }
const reducer=(state,action)=>{


switch(action.type)

{
    case "update" : return action.payload;
    default : return state;
}

}
export { is, reducer};