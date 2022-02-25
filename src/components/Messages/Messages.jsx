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
    {id: 4, message: 'Yo'}
  ];

  return (
      <div className={classes.wrapper}>

        <div className={classes.dialogs}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
          <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
        </div>

        <div className={classes.messages}>
          <MessageItem phrase={messagesData[0].message}/>
          <MessageItem phrase={messagesData[1].message}/>
          <MessageItem phrase={messagesData[2].message}/>
          <MessageItem phrase={messagesData[3].message}/>
        </div>

      </div>
  )
}

export default Messages;
