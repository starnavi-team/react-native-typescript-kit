import { combineReducers } from 'redux'
import { IUser } from '../../models/user'
import { user } from './user'

export interface IRootState {
  user: IUser
}

export default combineReducers({
  user,
})
