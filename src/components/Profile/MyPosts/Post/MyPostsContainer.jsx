
import MyPosts from '../MyPosts';
import {AppStoreType, PostType} from '../../../../redux/types';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/reducers/profileReducer';


type PropsType = {
  store: RootStoreType
}


const MyPostsContainer = (props: PropsType) => {
  let state = props.store.getState();

  let addNewPost = () => {
     props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (<MyPosts postsData={state.profilePage.postsData}
                   newPostText={state.profilePage.newPostText}
                   addPost={addNewPost}
                   updateNewPostText={onPostChange}/>)

}

export default MyPostsContainer;
