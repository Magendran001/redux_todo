import axios from "axios";
const authorise = "authorise";



export default authorise;



export const submitdata = (obj) => async (dispatch) => {
    console.log(obj)

    axios.post("https://reduxtodos.herokuapp.com/login", obj).then((res) => {
        console.log(res);

        if (res.data.status === "login success") {
            console.log("yes")
            localStorage.setItem("userdata", JSON.stringify(res.data.user))

            // setloginstatus((e) => { return true });

            dispatch({ type: "authorise", payload: { status: true } })
            // console.log(loginstatus, "login")



        }

    }).catch((err) => { console.log(err) })
}

