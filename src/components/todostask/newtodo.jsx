import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import  {useDispatch,useSelector} from "react-redux"

function NewTodo()
{

    let user_id = useSelector((state)=>{ return state.authorisereducer.userid});
    console.log(user_id)
      let [todoobj,settodoobj] = useState({user_id});
        
      let [title,settitle] = useState({});


      function titleinput(value)
      {
        settitle(()=>{return value});
        
      }

      function updatetodo(){
           
        console.log(todoobj)


          axios.post(`https://reduxtodos.herokuapp.com/todos/${user_id}`, 
            todoobj
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          
      }
      function copyobj(key)
      {
          if(key=="title")
          {
            settodoobj({...todoobj,todo:title})
          }
          else if(key=="todo" ||key=="progress" || key=="done")
          {
            settodoobj({...todoobj,todostatus:key}) 
          }
          else if(key =="official" ||key=="personal" || key=="others" )
          {
            settodoobj({...todoobj,todosabout:key}) 
          }
       
      }

      function createnewtask()
      {
         
      }


    return (<div className="Newtodo_whole">

        <div>
            <div>TITLE</div>
            <div>
                <input type="text" onChange={(e)=>{titleinput(e.target.value)}} />
                <button  onClick={()=>{copyobj("title")}} >add</button>
            </div>
            <div>
                date
            </div>
            <div>
                description
            </div>
            <div>

            </div>
            <div onClick={()=>{createnewtask()}}>
                create a new task
            </div>
        </div>
        <div className="Todo_status_radio_checkbox">
            <div className="Todo_status_radio_checkbox">
                <div>
                    <input type="radio" value="todo" name="todo" id="todo" onClick={(e)=>{copyobj(e.target.value)}} />
                    <span>Todo</span>
                </div>  
                <div>
                <input type="radio"  value="progress" id="progress" onClick={(e)=>{copyobj(e.target.value)}} />
                    <span>in progress</span>
                </div>
                <div>
                <input type="radio"  value="done" id="done" onClick={(e)=>{copyobj(e.target.value)}}/>
                    <span>Done </span></div> 
            </div>
            <div className="Todo_status_radio_checkbox">

            <div>
                <div>
                    <input type="checkbox" value="official" id="official"  onClick={(e)=>{copyobj(e.target.value)}} />
                    <span>Official</span>
                </div>
                <div>
                <input type="checkbox" value="personal" id="personal"  onClick={(e)=>{copyobj(e.target.value)}} />
                    <span>Personal</span>
                </div>
                <div>
                <input type="checkbox" value="others"  id="others"  onClick={(e)=>{copyobj(e.target.value)}} />
                    <span>Others </span></div> 
            </div>
            </div>
        </div>
        <div className="update_todo_btn">
               <button onClick={updatetodo}>update todo</button>
        </div>
    </div>)
}

export default NewTodo