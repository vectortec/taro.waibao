import { LOGIN } from '../constants/counter'
const INITIAL_STATE = {
  openId: null,
  token: null
}
const Login = async (state) => {
    return {
        hehe: 'tes'
    }
}

export default function loginReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...Login(state)
      }
    default:
      return state
  }
}