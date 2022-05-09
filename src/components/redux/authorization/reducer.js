import authorise from "./action"
const init = { loginstatus: false }
const authorisereducer = (state = init, { type, payload }) => {

    switch (type) {
        case authorise:
            return { ...state, loginstatus: payload.status, userid: payload.userid }


        default:
            return state

    }



}

export default authorisereducer