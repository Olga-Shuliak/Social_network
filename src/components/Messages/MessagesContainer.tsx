import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/reducers/messagesReducer';
import {RootStoreType} from '../../redux/redux-store';
import {Messages} from './Messages';
import {StoreContext} from '../../StoreContext';


export const MessagesContainer = () => {

  return (

      <StoreContext.Consumer>
        {
        (store: RootStoreType) => {

          let tempState = store.getState().messagesPage


          const onSendMessageClick = () => {
            store.dispatch(sendMessageCreator());
          }
          const onNewMessageChange = (body: string) => {
            store.dispatch(updateNewMessageBodyCreator(body));
          }
          return (
              <Messages
                  updateNewMessageBody={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  messagesPage={tempState}
              />)
        }
      }

      </StoreContext.Consumer>
  )
}

