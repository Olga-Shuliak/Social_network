import {AllActions, UsersPageType, UserType} from '../types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false

}
//====================================================================================================
const usersReducer = (state: UsersPageType = initialState, action: AllActions): UsersPageType => {

  switch (action.type) {
    case FOLLOW : {
      return {
        ...state,
        users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
      }

    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    default:
      return state;
  }
}

//=========================================AC=================================================

export const follow = (userID: number) => {
  return {
    type: FOLLOW,
    userID
  } as const
}

export const unfollow = (userID: number) => {
  return {
    type: UNFOLLOW,
    userID
  } as const
}
export const setUsers = (users: UserType[]) => {
  return {
    type: SET_USERS,
    users
  } as const
}
export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  } as const
}
export const setIsFetching = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  } as const
}

export default usersReducer;
