import category from "./action";
import { progress, done, todo } from "./action";


const categoryreducer = (state = {}, { type, payload }) => {
    switch (type) {
        case category:
            return { ...state, alltask: payload }

        case progress:
            return { ...state, inprogess: payload }

        case done:
            return { ...state, done: payload }

        case todo:
            return { ...state, todo: payload }

        default:
            return state
    }
}
export default categoryreducer