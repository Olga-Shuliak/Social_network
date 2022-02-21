import classes from './Profile.module.css';

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
          <div>
            <div>new post</div>
            <div>old posts
              <div>post 1</div>
              <div>post 2</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profile;
