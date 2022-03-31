import classes from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem';
import {MessageItem} from './Message/MessageItem';
import {useRef} from 'react';


export const Messages = (props) => {


  let dialogsBlock = props.dialogsData
      .map((el) => <DialogItem name={el.name} id={el.id}/>);

  let messagesBlock = props.messagesData
      .map((el) => <MessageItem phrase={el.message}/>);

  let newMessageElement = useRef(null);

  const addMyMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
      <div className={classes.wrapper}>
        <div className={classes.dialogs}>
          {dialogsBlock}
        </div>
        <div>
          <div className={classes.messages}>
            {messagesBlock}
          </div>
          <div className={classes.addMessageBlock}>
            <textarea ref={newMessageElement} name="MyMessage" cols="60" rows="3"/>
            <button onClick={addMyMessage}>Add Message</button>
          </div>
        </div>

      </div>
  )
}

export default Messages;
