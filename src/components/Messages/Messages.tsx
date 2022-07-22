import React, {ChangeEvent, useRef} from 'react';
import DialogItem from './DialogItem/DialogItem';
import {MessageItem} from './Message/MessageItem';
import classes from './Messages.module.css';
import {MessagePageType} from '../../redux/types';

type MessagesPropsType = {
  messagesPage: MessagePageType
  updateNewMessageBody: (body: string) => void
  sendMessage: () => void
}
export const Messages = (props: MessagesPropsType) => {


  let dialogsBlock = props.messagesPage.dialogsData
      .map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

  let messagesBlock = props.messagesPage.messagesData
      .map((message) => <MessageItem key={message.id} phrase={message.message}/>);

  let newMessageBody = props.messagesPage.newMessageBody


  let newMessageElement = useRef(null);

  const onSendMessageClick = () => {
    props.sendMessage();
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
                      ref={newMessageElement} name="MyMessage"/>
            <button onClick={onSendMessageClick}>SEND</button>
          </div>


        </div>

      </div>
  )
}

