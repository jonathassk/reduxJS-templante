import counterReducer from './counter'
import loggedReducer from './isLogged'
import nameReducer from './name'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  name: nameReducer
})
export default allReducers
