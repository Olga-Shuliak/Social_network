import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
      <div>
        <div><img className={classes.cover}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJstl1WiBMPVrXQAl-0c151ACg0jCezPzjQ&usqp=CAU"
                  alt="fon"/>
        </div>
        <div className={classes.profile}>
          <img className={classes.avatar}
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU"
               alt="avatar"/>
          <div className={classes.description}>description</div>
        </div>
      </div>
  )
}

export default ProfileInfo;
