import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/reducers/messagesReducer';
import {Messages} from './Messages';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {MessagePageType} from '../../redux/types';


const mapStateToProps = (state: RootStateType): { messagesPage: MessagePageType } => {
  return {
    messagesPage: state.messagesPage
  }
}
const mapDispatchToProps = (dispatch:Dispatch):{
  sendMessage: () => void,
  updateNewMessageBody: (body: string) => void
} =>
{
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
