import {AllActions, ProfileApiType, ProfilePageType} from '../types';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  postsData: [
    {id: 1, message: 'feel good', likeCount: 10},
    {id: 2, message: 'win!!!', likeCount: 5},
    {id: 3, message: 'aloha', likeCount: 1},
    {id: 4, message: 'all serious', likeCount: 7}
  ],
  newPostText: 'hello',
  profile: null
}

const profileReducer = (state: ProfilePageType = initialState , action: AllActions):ProfilePageType => {

  switch (action.type) {

    case ADD_POST:{
      return {
        ...state,
        postsData: [...state.postsData, {id: 5, message: state.newPostText, likeCount: 0}],
        newPostText: ''
      }
  }

    case UPDATE_NEW_POST_TEXT:{
      let stateCopy = {...state};
      stateCopy.newPostText = action.newPostText;
      return stateCopy;
    }

    case SET_USER_PROFILE:{
      return { ...state, profile: action.profile}
    }

    default:
      return state;
  }
}

//_____________________________________AC___________________________________
export const addPost = () => {
  return {
    type: ADD_POST
  } as const
}

export const updateNewPostText = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
  } as const
}
export const setUserProfile = (profile: ProfileApiType) => {
  return {
    type: SET_USER_PROFILE,
    profile
  } as const
}

export default profileReducer;
