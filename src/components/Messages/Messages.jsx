import classes from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem';
import {MessageItem} from './Message/MessageItem';




export const Messages = (props) => {

  let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Olia'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Gena'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Zakhar'}
  ]

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What about tomorrow?'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
  ]

  let dialogsBlock = dialogsData
      .map((el) => <DialogItem name={el.name} id={el.id}/>);

  let messagesBlock = messagesData
      .map((el) => <MessageItem phrase={el.message}/>);



  return (
      <div className={classes.wrapper}>

        <div className={classes.dialogs}>
          { dialogsBlock }
        </div>

        <div className={classes.messages}>
          { messagesBlock }
        </div>

      </div>
  )
}

export default Messages;
