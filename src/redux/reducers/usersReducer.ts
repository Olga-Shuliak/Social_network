import {AllActions, UsersDataType, UsersPageType} from '../types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  usersData: [
    {id: 1, followed: true, fullName: 'Olia S.', status: 'Hello world', location: {city: 'Minsk', country: 'Belarus'}},
    {
      id: 2,
      followed: false,
      fullName: 'Sveta E.',
      status: 'i am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {id: 3, followed: true, fullName: 'Dima M.', status: 'Not today', location: {city: 'Brest', country: 'Belarus'}}
  ]
}
//====================================================================================================
const usersReducer = (state: UsersPageType = initialState, action: AllActions): UsersPageType => {

  switch (action.type) {
    case FOLLOW : {
      return {
        ...state,
        usersData: state.usersData.map(u => u.id === action.userID ? {...u, followed: true} : u)
      }

    }
    case UNFOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map(u => u.id === action.userID ? {...u, followed: false} : u)
      }
    }
    case SET_USERS: {
      return {
        ...state,
        usersData: [...state.usersData, ...action.users]
      }
    }

    default:
      return state;
  }
}

//=========================================AC=================================================

export const followAC = (userID: number) => {
  return {
    type: FOLLOW,
    userID
  } as const
}

export const unfollowAC = (userID: number) => {
  return {
    type: UNFOLLOW,
    userID
  } as const
}
export const setUsersAC = (users: UsersDataType[]) => {
  return {
    type: SET_USERS,
    users
  } as const
}

export default usersReducer;
