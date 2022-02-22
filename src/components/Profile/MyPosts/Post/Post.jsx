import classes from './Post.module.css';

const Post = () => {
  return (

      <div>
        <div className={classes.post}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU" alt="avatar"/>
          <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque excepturi maiores maxime non
          </div>
        </div>
        <span>Like</span>
      </div>
  )
}

export default Post;
