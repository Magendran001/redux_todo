
import "./todo.css"
import  {useDispatch,useSelector} from "react-redux"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import NewTodo from "./newtodo";
import Summary from "./summary";
import Categorytask from "./category";
import {Navigation} from "react-router-dom"


function Usertodo()
{
    const nav = useNavigate()

     let [todotabs,settodotabs] = useState("")

    function Todotabs(tabs)
    {
        settodotabs(tabs);
        console.log(todotabs)
    }

    function SetTabs({tabs})
    {
       switch(tabs)
       {
           case "new_todo":
               return <NewTodo/>

               default:
               return <Categorytask/>
       }
    }

    function Goback()
    {
        nav(0,{replace:true})    
    }
       

      
    let [userdata,setuserdata] = useState({});


    let user_id = useSelector((state)=> state.authorisereducer.userid);



    console.log(user_id);
        
    useEffect(()=>{
        
        axios.get(`https://reduxtodos.herokuapp.com/user/${user_id}`).
        then((res)=> {console.log(res.data)
        
            setuserdata(res.data)  
    }).
    catch((err)=>{console.log(err)})

    },[])

    return (<div className="todo_task">
        
         <div className="user_details_todos_list">
                   
                   <div>{userdata.name}</div>
                   <div>
                        <div>
                            <div>
                                <span>All</span><span>4</span> 
                            </div>
                            <div>   <span>Personal</span><span>1</span> </div>
                            <div>   <span>Official</span><span>2</span> </div>
                            <div>   <span>Others</span><span>1</span> </div>
                        </div>
                   </div>
                   <div >
                       <button onClick={()=>{Todotabs("new_todo")}} >new todo</button>
                       <button onClick={()=>{Goback()}}>go back</button>
                         
                   </div>
                   <div>
                           <Link to="/logout">Logout</Link>
                   </div>
         </div>
         <div>
             <SetTabs   tabs={todotabs}/>
         </div>
         </div>)
}

export default Usertodo