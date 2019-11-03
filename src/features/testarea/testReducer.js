import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants"
import createReducer from '../../app/common/util/reducerUtils'

const initialState ={
    data: 42
}





const incrementCounter = (state) => {
    return {...state, data: state.data + 1};
}

const decrementCounter = (state) => {
    return {...state, data: state.data - 1};
}



// export const createReducer = (initialState, fnMap) => {
//     return( state = initialState, {type, payload}) => {
//         const handler = fnMap[type];

//         return handler ? handler(state, payload) : state
//     }
// }

export default createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter
})