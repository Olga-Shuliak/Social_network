import {AllActions, ProfilePageType} from '../types';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    {id: 1, message: 'feel good', likeCount: 10},
    {id: 2, message: 'win!!!', likeCount: 5},
    {id: 3, message: 'aloha', likeCount: 1},
    {id: 4, message: 'all serious', likeCount: 7}
  ],
  newPostText: 'hello'
}

const profileReducer = (state: ProfilePageType = initialState , action: AllActions):ProfilePageType => {

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
