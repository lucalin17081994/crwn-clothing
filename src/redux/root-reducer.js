//root reducer is master-reducer
import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'

export default combineReducers({
  user:userReducer
})