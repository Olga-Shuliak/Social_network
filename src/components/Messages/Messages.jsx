import classes from './Messages.module.css'
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {

  let path = '/messages/' + props.id;

  return (
      <div className={classes.dialogsItem}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}

export const MessageItem = (props) => {
  return (
      <div className={classes.messageItem}>{props.phrase}</div>
  )
}


export const Messages = (props) => {

  let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Olia'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Gena'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Zahar'}
  ];

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What about tomorrow?'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
  ];

  let dialogsBlock = dialogsData
      .map((el) => <DialogItem name={el.name} id={el.id}/>);

  let messagesBlock = messagesData
      .map(el => <MessageItem phrase={el.message}/>);



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
