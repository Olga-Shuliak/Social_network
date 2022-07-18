import MyPosts from '../MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/reducers/profileReducer';
import {RootStoreType} from '../../../../redux/redux-store';
import {StoreContext} from '../../../../StoreContext';


// type PropsType = {
//   store: RootStoreType
// }


const MyPostsContainer = () => {


  return (
      <StoreContext.Consumer>
        {
        (store: RootStoreType) => {
          let state = store.getState();

          let addNewPost = () => {
            store.dispatch(addPostActionCreator());
          }

          const onPostChange = (text:string) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }
          return (
              <MyPosts postsData={state.profilePage.postsData}
                       newPostText={state.profilePage.newPostText}
                       addPost={addNewPost}
                       updateNewPostText={onPostChange}/>)
        }
      }
      </StoreContext.Consumer>)

}

export default MyPostsContainer;
