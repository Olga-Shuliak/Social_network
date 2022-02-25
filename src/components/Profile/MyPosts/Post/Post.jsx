import classes from './Post.module.css';

const Post = (props) => {
  return (

      <div>
        <div className={classes.post}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU" alt="avatar"/>
          <div className={classes.text}>{props.message}</div>
        </div>
        <div className={classes.likesBox}>Like {props.likeCounter}</div>
      </div>
  )
}

export default Post;
