import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"

function Counter()
{
    let dispatch = useDispatch();
    let value = useSelector((state)=>{return state.counterreducer.counter});
    console.log(value)

    function counteradd()
    {
       return dispatch({type:"counter",payload:value+1})
    }

    let [counter,setcounter] = useState(3)
    return (<div>
                 <div>{value}</div>
           <button onClick={counteradd}>add</button>
    </div>)
}

export default Counter