

import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
function Logout()
{
    let dispatch = useDispatch();
    let Nav = useNavigate();

    let [loginstate,setloginstate] = useState(false);

    let loginselector  = useSelector((state)=>{return state.authorisereducer.loginstatus});

    useEffect(()=>{

         console.log(loginstate,"loginstateee")

    },[loginselector]);


    console.log(loginselector,"loginselector")
  
    function logout()
    {
        localStorage.setItem("userdata",JSON.stringify(""));
        dispatch({type:"authorise",payload:false})
        Nav("/login")
    }
     

    return (<div>
        <button onClick={logout}> Logout</button>
    </div>)
}

export default Logout