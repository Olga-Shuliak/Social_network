import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';


const Profile = (props) => {


  return (
      <div className={classes.wrapper}>
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}
            //addNewPost={props.addNewPost}
            newPostText={props.newPostText}
            //updateNewPostText={props.updateNewPostText}

            dispatch={props.dispatch}/>
      </div>
  )
}

export default Profile;
