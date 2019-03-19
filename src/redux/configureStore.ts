import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'
import appReducer from './reducers'

export const store = createStore(
  appReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
    ),
  ),
)
