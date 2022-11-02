import classes from './ProfileInfo.module.css';
import {ProfileApiType} from '../../../redux/types';
import {Preloader} from '../../common/Preloader/Preloader';

type ProfileInfoPropsType = {
  profile: ProfileApiType
}
const ProfileInfo = (props: ProfileInfoPropsType) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
      <div>
        <div><img className={classes.cover}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJstl1WiBMPVrXQAl-0c151ACg0jCezPzjQ&usqp=CAU"
                  alt="fon"/>
        </div>
        <div className={classes.profile}>
          <img className={classes.avatar}
               src={props.profile.photos.large}
               alt="avatar"/>
          <div className={classes.description}>
            <div>
            name: {props.profile.fullName}
          </div>
            <div>
              {props.profile.aboutMe}
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProfileInfo;
