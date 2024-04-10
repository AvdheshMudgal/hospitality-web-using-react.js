
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useReducer ,createContext } from 'react'
import {is,reducer} from './Reducer'



export const MyContext = createContext();


const Start =()=>{
const [state,dispatch]=useReducer(reducer,is);
return(
    <MyContext.Provider value={{state, dispatch}}>
        <App/>
    </MyContext.Provider>
)
}


ReactDOM.createRoot(document.getElementById('root')).render(
 
  <Start/>
 
)