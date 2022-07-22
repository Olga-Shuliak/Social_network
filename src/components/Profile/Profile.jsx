import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/Post/MyPostsContainer';



const Profile = () => {

  return (
      <div className={classes.wrapper}>
        <ProfileInfo/>
        <MyPostsContainer
            //store={props.store}
        />
      </div>
  )
}

export default Profile;
