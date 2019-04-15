import { LOGIN } from '../constants/counter'
const INITIAL_STATE = {
  openId: null,
  token: null,
  user: {
    userName: ''
  }
}
const Login = (state, user) => {
    return {
        token: user.token,
        user
    }
}

export default function loginReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...Login(state, action.user)
      }
    default:
      return state
  }
}