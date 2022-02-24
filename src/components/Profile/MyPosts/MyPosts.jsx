import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
      <div className={classes.myPost}>
        <h3>My post</h3>
        <div>
          <textarea name="MyPost" cols="90" rows="2">Hello World!</textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div className={classes.posts}>
          <Post message="Hi how are you?"/>
          <Post message="hello bro"/>
          <Post message="alloha"/>
        </div>
      </div>

  )
}

export default MyPosts;
