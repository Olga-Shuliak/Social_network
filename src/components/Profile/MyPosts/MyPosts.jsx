import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {useRef} from 'react';



const MyPosts = (props) => {

  let postsBlock = props.postsData.map(el => <Post message={el.message} likeCounter={el.likeCount}/>);

  let newPostElement = useRef(null);

  let addNewPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
      <div className={classes.myPost}>
        <h3>My post</h3>
        <div>
          <textarea ref={newPostElement} name="MyPost" cols="90" rows="2"/>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
        <div className={classes.posts}>
          { postsBlock }
        </div>
      </div>

  )
}

export default MyPosts;
