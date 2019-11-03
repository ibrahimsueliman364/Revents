import { combineReducers } from "../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/events/eventReducer";
import {reducer as FormReducer} from 'redux-form'
import modalReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";
import {reducer as ToastrReducer} from 'react-redux-toastr'


const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer
})

export default rootReducer