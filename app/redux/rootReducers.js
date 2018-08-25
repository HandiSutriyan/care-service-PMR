import { combineReducers } from 'redux'

import nav from './nav'
import menuReducer from '../components/reducers'

const appReducer = combineReducers({
  nav,
  menuReducer
})

export default appReducer
