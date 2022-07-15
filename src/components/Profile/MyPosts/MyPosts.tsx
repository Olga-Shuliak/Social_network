import Post from './Post/Post';
import {useRef} from 'react';


const MyPosts = (props: any) => {

  let postsBlock = props.postsData.map((el:any) => <Post message={el.message} likeCounter={el.likeCount}/>);

  let newPostElement = useRef(null);

  let addNewPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    // @ts-ignore
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
      <div
          //className={classes.myPost}
      >
        <h3>My post</h3>
        <div>
          <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                    name="MyPost"
                    cols={90}
                    rows={2}/>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
        <div
            //className={classes.posts}
        >
          {postsBlock}
        </div>
      </div>

  )
}

export default MyPosts;
