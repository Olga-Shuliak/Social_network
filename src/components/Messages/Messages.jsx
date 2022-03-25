import classes from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem';
import {MessageItem} from './Message/MessageItem';




export const Messages = (props) => {


  let dialogsBlock = props.dialogsData
      .map((el) => <DialogItem name={el.name} id={el.id}/>);

  let messagesBlock = props.messagesData
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
