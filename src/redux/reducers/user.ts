import { USER_SUCCESS } from '../constants/user'
import { createReducer } from '../reduxHelpers'

export const user = createReducer(null, {
  [USER_SUCCESS] (state, action) {
    return action.payload
  },
})
