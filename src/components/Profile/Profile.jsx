import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
      <div className={classes.wrapper}>
        <ProfileInfo/>
        <MyPosts/>
      </div>
  )
}

export default Profile;
