import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
          <div>
            My post
            <div>
              <textarea name="MyPost" cols="90" rows="2">Hello World!</textarea>
              <button>Add post</button>
            </div>
            <div className={classes.posts}>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
            </div>
          </div>

  )
}

export default MyPosts;
