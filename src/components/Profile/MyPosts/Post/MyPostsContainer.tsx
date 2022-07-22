import MyPosts from '../MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/reducers/profileReducer';
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
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

