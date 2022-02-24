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
  return (
      <div className={classes.wrapper}>

        <div className={classes.dialogs}>
          <DialogItem name={'Dima'} id={'1'}/>
          <DialogItem name={'Olia'} id={'2'}/>
          <DialogItem name={'Sasha'} id={'3'}/>
          <DialogItem name={'Gena'} id={'4'}/>
          <DialogItem name={'Sveta'} id={'5'}/>
          <DialogItem name={'Zahar'} id={'6'}/>
        </div>

        <div className={classes.messages}>
          <MessageItem phrase={'Hi'}/>
          <MessageItem phrase={'How are you?'}/>
          <MessageItem phrase={'What about tomorrow?'}/>
          <MessageItem phrase={'Yo'}/>
        </div>

      </div>
  )
}

export default Messages;
