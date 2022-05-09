
const init = {products:[{username:"maggi",password:23}]}
const reducer = (state =init,{type,payload})=>{


    switch (type)   
    {
        case "getdata" :

        return  payload

        case "postdata":
            {
                  console.log(payload,"paaa")
        return {...state,products:[...state.products, payload] }
            }

        default :  
         return  state
    }
    

    
}

export default reducer