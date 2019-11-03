import { MODAL_OPEN, MODAL_ClOSE } from "./modelConstant"

export const openModal =(modalType, modalProps) =>{
    return{
        type: MODAL_OPEN,
        payload: {
            modalType,
            modalProps
        }
    }
}


export const closeModal =() =>{
    return{
        type: MODAL_ClOSE,
    }
}
