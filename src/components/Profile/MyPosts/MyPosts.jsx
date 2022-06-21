import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {useRef} from 'react';


const MyPosts = (props) => {

  let postsBlock = props.postsData.map(el => <Post message={el.message} likeCounter={el.likeCount}/>);

  let newPostElement = useRef(null);

  let addNewPost = () => {
    //props.addPost();
    props.dispatch({type: 'ADD-POST'});
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;

    //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);

  }

  return (
      <div className={classes.myPost}>
        <h3>My post</h3>
        <div>
          <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                    name="MyPost"
                    cols="90" rows="2"/>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
        <div className={classes.posts}>
          {postsBlock}
        </div>
      </div>

  )
}

export default MyPosts;
