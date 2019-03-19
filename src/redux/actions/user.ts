import { USER_SUCCESS } from '../constants/user'

const getUser = () => ({
  type: USER_SUCCESS,
  payload: { name: 'John Doe' },
})

export { getUser }
