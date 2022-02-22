import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
      <div className={classes.content}>
        <div><img className={classes.cover}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpNZM3apiTm01J_Ih8XYkRhvIOBr2kKhj1w&usqp=CAU"
            alt="fon"/></div>
        <div>
          <img className={classes.avatar}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU"
              alt="avatar"/>
          <div>description</div>
          <MyPosts />
        </div>
      </div>
  )
}

export default Profile;
