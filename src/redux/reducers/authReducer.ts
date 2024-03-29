import {AllActions, AuthObjectType} from '../types';

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};
const authReducer = (state: AuthObjectType = initialState, action: AllActions) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

//_____________AC____________

export const setAuthUserData = (userId: number|null, email: string|null, login: string|null) => {
  return {
    type: SET_USER_DATA,
    data: {userId, email, login}
  } as const
}

export default authReducer
