import { useEffect } from "react";
import { useState } from "react";
import Usertodo from "./todostask/usertodo";

function Home()
{
 let [loginstatus,setloginstatus] = useState(false);
     let data =JSON.parse( localStorage.getItem("userdata"))||{};
     console.log(data);

     useEffect(()=>{

        if(data.name)
     {
        setloginstatus(()=>{return true});
        console.log(loginstatus,"loginstatus")    
     }


     },[loginstatus])
     
    return(<div>{loginstatus?<Usertodo/>:"Kindly regeister or login to continue your todo "}</div>)
}

export default Home