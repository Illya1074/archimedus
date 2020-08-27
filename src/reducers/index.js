import userReducer from './userReducer'
import {combineReducers} from 'redux'
import endPoint from './endPoint'

const allReducers = combineReducers({
    user: userReducer,
    endPoint: endPoint
})

export default allReducers;

