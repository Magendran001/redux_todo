import { useState } from "react"
import axios from "axios";
import { useNavigate} from "react-router-dom"
import { useEffect } from "react";

function Regeister()
{

  let Nav = useNavigate()
    let [obj,setobj] = useState({});

    let [regeisterstate,setregeisterstate] = useState(false)
  
      function handlechange(ele)
      {
          console.log(ele)
            let {value,name} = ele;
            setobj({...obj,[name]:value});

      }


      useEffect(()=>{
            
        console.log(regeisterstate,"rege")
        if(regeisterstate==true)
        {
          Nav("/login");
        }

      },[regeisterstate])

     async function updatechanges()
      {
              
        // http://localhost:9083/product
            axios.post('https://reduxtodos.herokuapp.com/regeister', obj)
              .then(function (response) {
                console.log(response);
                    
                if(response.data.x.name)
                {
                 
                   setregeisterstate((e)=>{return true});
                   console.log(regeisterstate)
                }

              })
              .catch(function (error) {
                console.log(error);
              });
      }
     

    return (<div>
          
           <input type="text" name="name" id="name" onChange={(e)=>{handlechange(e.target)}} placeholder="name"  />
           <input type="email"  name="email" id="email" onChange={(e)=>{handlechange(e.target)}} placeholder="email"  />
           <input type="password" name="password" id="password" onChange={(e)=>{handlechange(e.target)}} placeholder="password" />
           <input type="number" name="mbl_number" id="mbl_number" placeholder="mobile number" onChange={(e)=>{handlechange(e.target)}}/>


           <input type="submit" onClick={updatechanges} />
          
    </div>)
}

export default Regeister

// {
//     "name": "MASAI School",
//     "email": "hello@masai.com"
//     "password": "secret",
//     "username": "masai-school",
//     "mobile": "9876543210",
//     "description": "A Transformation in education!" 
//   }