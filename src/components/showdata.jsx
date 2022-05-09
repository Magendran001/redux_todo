import { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux'

function Showdata()
{
   
    let [product,setproduct] = useState([])
    const count = useSelector((store)=>{return store.reducer.products});
   
      useEffect(()=>{
        console.log(count,"count")
        setproduct(count)
      },[count])
         
      function setchange(ele)
      {
                 let {value}   = ele;
                 if(value=="low")
                 {
                   let x=  product.sort((a,b)=>a.password -b.password);
                   console.log(x,"sort")
                   setproduct([...x])

                 }
                 else
                 {
                    let x=  product.sort((a,b)=>b.password -a.password);
                    console.log(x,"sort")
                    setproduct([...x])
                 }
          
      }
     
   
    return ( <div> <div>{product.map((e,index)=>{return <div key={index} >{e.username},{e.password}</div>})}
             <select name="" id="" onChange={(e)=>{setchange(e.target)}}>
                  <option value="low">low</option>
                  <option value="high">high to low</option>
                 </select>   
    </div></div>) 
}
export default Showdata