import MyPosts from '../MyPosts';
import {
  addPost,
  updateNewPostText,
} from '../../../../redux/reducers/profileReducer';
import {RootStateType, RootStoreType} from '../../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';



const mapStateToProps = (state: RootStateType) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch:Dispatch):{
  addPost: () => void,
  updateNewPostText: (text: string) => void
} =>
{
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostText(text));
    },
    addPost: () => {
      dispatch(addPost());
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

