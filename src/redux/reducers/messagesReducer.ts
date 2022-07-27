import {AllActions, MessagePageType} from '../types';


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogsData: [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Olia'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Gena'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Zakhar'}
  ],
  messagesData: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What about tomorrow?'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
  ],
  newMessageBody: ''
}

const messagesReducer = (state: MessagePageType = initialState, action: AllActions): MessagePageType => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData,  {id: 7, message: body}]
      };
    default:
      return state;
  }

}


export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'}) as const
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body}) as const

export default messagesReducer;
