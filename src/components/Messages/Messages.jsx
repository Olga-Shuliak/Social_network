import {AppStoreType, DialogsType, MessageType} from '../../redux/types';
import React, {useRef} from 'react';
import DialogItem from './DialogItem/DialogItem';
import {MessageItem} from './Message/MessageItem';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/reducers/messagesReducer';
import classes from './Messages.module.css';


export const Messages:React.FC< {
  // dialogsData: DialogsType[],
  // messagesData: MessageType[],
  store: AppStoreType,
}> = (props) => {

  const tempState = props.store.getState()

  let dialogsBlock = tempState.messagesPage.dialogsData
      .map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

  let messagesBlock = tempState.messagesPage.messagesData
      .map((message) => <MessageItem key={message.id} phrase={message.message}/>);

  let newMessageBody = tempState.messagesPage.newMessageBody



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

