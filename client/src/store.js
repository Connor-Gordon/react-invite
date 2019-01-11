import { createStore, combineReducers } from 'redux'

import contactsReducer from './reducers/contactsReducer'
import goingReducer from './reducers/goingReducer'
import notgoingReducer from './reducer/notgoingReducer'
// import all reducers here

const rootReducer = combineReducers({
  goingReducer,
  notgoingReducer,
  contactsReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store