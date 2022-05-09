import { useState } from "react"
import axios from "axios"
import store from "./redux/store";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { submitdata } from "./redux/authorization/action";



function Login() {

    

    let Nav = useNavigate();
    const loginstatus =useSelector((store)=>{return store.authorisereducer.loginstatus});
    console.log(loginstatus,"lllllllllllllllllllllllll")
    const dispatch = useDispatch()
    

 let [obj,setobj] = useState({})
    function changehandle(ele)
    {
        let {name,value}= ele;
        setobj({...obj,[name]:value})
    }
            
    if(loginstatus)
    {
        Nav("/home")
    }


    // function submitdata()
    // {
    //      console.log(obj)
        
    //    axios.post("https://reduxtodos.herokuapp.com/login",obj).then((res)=>{console.log(res);
               
    //    if(res.data.status==="login success")
    //    {
    //        console.log("yes")
    //     localStorage.setItem("userdata",JSON.stringify(res.data.user))
        
    //     setloginstatus((e)=>{ return true});
    
    //     dispatch({type:"authorise",payload:{status:true}})
    //      console.log(loginstatus,"login")
    //    }
    
    // }).catch((err)=>{console.log(err)})
    // }

     

//      useEffect(()=>{
//         console.log(loginstatus)
//         if(loginstatus===true)
// {
//     Nav("/home")
// }

//      },[loginstatus])


    return (<div>   
        <input type="text" name="username" placeholder="username" onChange={(e)=>{changehandle(e.target)}} />
        <input type="password" name="password" placeholder="password" onChange={(e)=>{changehandle(e.target)}} />
        <input type="submit" onClick={()=>{dispatch(submitdata(obj))}}/>
                
    </div>)
}

export default Login