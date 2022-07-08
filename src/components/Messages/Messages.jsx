import classes from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem';
import {MessageItem} from './Message/MessageItem';
import {useRef} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/state';


export const Messages = (props) => {


  let dialogsBlock = props.dialogsData
      .map((el) => <DialogItem name={el.name} id={el.id}/>);

  let messagesBlock = props.messagesData
      .map((el) => <MessageItem phrase={el.message}/>);

  //---------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!---------------------------
  let newMessageBody = props.store._state.newMessageBody;



  let newMessageElement = useRef(null);

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  const onNewMessageChange =(e)=> {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
            <textarea placeholder="Add your message"
                      value={newMessageBody}
                      onChange={onNewMessageChange}
                      ref={newMessageElement} name="MyMessage" cols="60" rows="3"/>
            <button onClick={onSendMessageClick}>SEND</button>
          </div>


        </div>

      </div>
  )
}

export default Messages;
