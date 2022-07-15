
import React, {useRef} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/reducers/messagesReducer';
import {RootStoreType} from '../../redux/redux-store';
import {Messages} from './Messages';


export const MessagesConteiner:React.FC< {
  store: RootStoreType
}> = (props) => {

  let tempState = props.store.getState().messagesPage


  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  const onNewMessageChange =(body:string)=> {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
      <Messages updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                messagesPage={tempState}
      />
  )
}

