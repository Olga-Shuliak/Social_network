import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import {AppStoreType, PostType} from '../../redux/types';
import {RootStoreType} from '../../redux/redux-store';

type PropsType = {
  // postsData: PostType[]
  // newPostText: string
  // dispatch: AppStoreType['dispatch']
  store:RootStoreType
}
const Profile = (props: PropsType) => {

  return (
      <div className={classes.wrapper}>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
      </div>
  )
}

export default Profile;
