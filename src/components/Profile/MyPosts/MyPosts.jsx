import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {


  let postsBlock = props.postsData.map(el => <Post message={el.message} likeCounter={el.likeCount}/>);

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
          { postsBlock }
        </div>
      </div>

  )
}

export default MyPosts;
