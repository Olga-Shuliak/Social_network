import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/Post/MyPostsContainer';



const Profile = (props: any) => {

  return (
      <div className={classes.wrapper}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
      </div>
  )
}

export default Profile;
