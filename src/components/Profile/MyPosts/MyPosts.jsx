import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    {id: 1, message: 'Hi how are you?', likeCount: 10},
    {id: 2, message: 'hello bro', likeCount: 5},
    {id: 3, message: 'alloha', likeCount: 1},
    {id: 4, message: 'yo bro', likeCount: 7}
  ]

  let postsBlock = postsData.map(el => <Post message={el.message} likeCounter={el.likeCount}/>);

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
