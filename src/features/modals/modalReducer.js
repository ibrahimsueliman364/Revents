import createReducer from "../../app/common/util/reducerUtils"
import { MODAL_OPEN, MODAL_ClOSE } from "./modelConstant"

const initialState = null

const openModal =(state, payload) => {
    const {modalType, modalProps} = payload
    return {modalType, modalProps}
}

const closeModal = (state) => {
    return null
}

export default createReducer(initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_ClOSE]: closeModal
})









// export const createReducer = (initialState, fnMap) => {
//     return( state = initialState, {type, payload}) => {
//         const handler = fnMap[type];

//         return handler ? handler(state, payload) : state
//     }
// }

// export default createReducer