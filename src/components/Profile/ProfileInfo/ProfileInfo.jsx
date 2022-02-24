import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
      <div>
        <div><img className={classes.cover}
                  src="https://images.wallpaperscraft.ru/image/single/fon_temnyy_pyatna_linii_51861_300x168.jpg"
                  alt="fon"/>
        </div>
        <div className={classes.profile}>
          <img className={classes.avatar}
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU"
               alt="avatar"/>
          <div className={classes.description}>description</div>
        </div>
      </div>
  )
}

export default ProfileInfo;
