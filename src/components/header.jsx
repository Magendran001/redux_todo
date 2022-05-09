import "./header.css"
import {Link} from "react-router-dom"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { useEffect } from "react";
function Header()
{

     let dispatch = useDispatch();
 
     

    let selector = useSelector((state) =>  state.authorisereducer.loginstatus);
    console.log(selector,"headerselectors")
   
    let [loginstatus,setloginstatus] = useState(false);


  
    let data = JSON.parse(localStorage.getItem("userdata"));
    console.log(data,"headerdatas")

          
    if(data.name)
    {
        console.log(data,"llllllllll")
        dispatch({type:"authorise",payload:{status:true,userid:data._id}}) 
    }
    


    useEffect(()=>{
        if(data.name)
        {
           
            setloginstatus(()=>{return selector})   
        }

    },[selector])



    return (<div className="header">
        
            <div><Link to="/home">Home</Link></div>
            <div className="login-signin">
            <div ><Link to="/signin">signin</Link></div>
        <div>{!selector?<Link to="/login">loginin</Link>:<Link to="/logout">logout</Link>}</div>
            </div>
        
        

        
    </div>)
}

export default Header