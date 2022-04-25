import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import {updateNewPostText} from '../../redux/state';

const Profile = (props) => {


  return (
      <div className={classes.wrapper}>
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}
                 addNewPost={props.addNewPost}
                 newPostText={props.newPostText}
                 updateNewPostText={props.updateNewPostText}/>
      </div>
  )
}

export default Profile;
