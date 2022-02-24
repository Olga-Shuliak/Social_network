import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
      <div>
        <div><img className={classes.cover}
                  src="https://images.wallpaperscraft.ru/image/single/fon_temnyy_pyatna_linii_51861_300x168.jpg"
                  alt="fon"/>
        </div>
        <div>
          <img className={classes.avatar}
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU"
               alt="avatar"/>
          <div>description</div>
          <MyPosts/>
        </div>
      </div>
  )
}

export default Profile;
