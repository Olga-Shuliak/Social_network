import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    {id: 1, message: 'Hi how are you?', likeCount: 10},
    {id: 2, message: 'hello bro', likeCount: 5},
    {id: 3, message: 'alloha', likeCount: 1}
  ]
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
          <Post message={postsData[0].message} likeCounter={postsData[0].likeCount}/>
          <Post message={postsData[1].message} likeCounter={postsData[1].likeCount}/>
          <Post message={postsData[2].message} likeCounter={postsData[2].likeCount}/>
        </div>
      </div>

  )
}

export default MyPosts;
