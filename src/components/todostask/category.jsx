import axios from "axios"
import { useState } from "react";
import { useEffect } from "react"
import  {useDispatch,useSelector} from "react-redux"

function Categorytask()
{
    let dispatch = useDispatch();
     let task = useSelector((state)=>{ return state});
     console.log(task,"yyyyyyyyyyy")
    
    let donearray = useSelector((state)=>{ return state.categoryreducer.done})||[];
    let inprogressarray = useSelector((state)=>{ return state.categoryreducer.inprogess})||[];
    let todoarray = useSelector((state)=>{ return state.categoryreducer.todo})||[];
        let taskselector = useState([]);
    //     let donearray = useState([]);
    // let inprogressarray = useState([]); 
    // let todoarray = useState([]);
    console.log(taskselector,"taskselector")

    let [taskarray,settaskarray] = useState([])
     

    let user_id = useSelector((state)=>{ return state.authorisereducer.userid});
console.log(user_id)
    useEffect(()=>{
           
        axios.get(`https://reduxtodos.herokuapp.com/todos/${user_id}`).then((res)=>{ 
            console.log(res.data,"res.dats")
          
            dispatch({type:"all_category_task",payload:res.data})
        

        console.log(taskarray,"uuuu")}).catch((error)=>{console.log(error)})

    },[])


    useEffect(()=>{
           
        axios.get(`https://reduxtodos.herokuapp.com/todos/${user_id}/progress`).then((res)=>{ 
            console.log(res.data,"res.dats")
          
            dispatch({type:"progress",payload:res.data})
        

        console.log(taskarray,"uuuu")}).catch((error)=>{console.log(error)})

    },[])

    useEffect(()=>{
           
        axios.get(`https://reduxtodos.herokuapp.com/todos/${user_id}/done`).then((res)=>{ 
            console.log(res.data,"res.dats")
          
            dispatch({type:"done",payload:res.data})
        

        console.log(taskarray,"uuuu")}).catch((error)=>{console.log(error)})

    },[])

    useEffect(()=>{
           
        axios.get(`https://reduxtodos.herokuapp.com/todos/${user_id}/todo`).then((res)=>{ 
            console.log(res.data,"res.dats")
          
            dispatch({type:"todo",payload:res.data})
        

        console.log(taskarray,"uuuu")}).catch((error)=>{console.log(error)})

    },[])
     


 
   return (<div className="Category_task">
       <div className="Todo">
           <div className="todo_status_shown">Todo</div>
           <div>{todoarray.map((ele)=>{ return <Taskeach data={ele} />}) }</div>
             
           
       </div>
       <div className="inprogress">
       <div className="todo_status_shown">IN PROGRESS</div>
       <div>{inprogressarray.map((ele)=>{ return <Taskeach data={ele} />}) }</div>
       </div>
       <div className="done">
       <div className="todo_status_shown">DONE</div>
       <div>{donearray.map((ele)=>{ return <Taskeach data={ele} />}) }</div>
       </div>
   </div>)

}

export default Categorytask


function Taskeach({data})
{
    console.log(data,"jjjjjjj")
    return (<div>
        <div>Task</div>
        <input value={data.todosabout} disabled/>
        <div>{data.todo}</div>

    </div>)
}