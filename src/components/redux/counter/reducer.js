import counter from "./action";

const init = { counter: 1 }
const counterreducer = (state = init, { type, payload }) => {


    switch (type) {
        case counter:
            {
                return { ...state, counter:payload }
            }
    }

    return state;


}

export default counterreducer