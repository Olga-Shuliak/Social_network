import {AllActions, ProfilePageType} from '../types';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



const profileReducer = (state: ProfilePageType, action: AllActions) => {
//приходит кусочек стейта (профиль), а не весь
//   if (action.type === ADD_POST) {
//     let newPost = {
//       id: 5,
//       message: state.newPostText,
//       likeCount: 0
//     };
//     state.postsData.push(newPost);
//     state.newPostText = '';
//
//   } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     state.newPostText = action.newText;
//
//   }
//   return state;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      };
      state.postsData.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;
    default:
      return state;
  }
}


export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
  } as const
}

export default profileReducer;
