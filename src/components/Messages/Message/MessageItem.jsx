import classes from './../Messages.module.css'


export const MessageItem = (props) => {
  return (
      <div className={classes.messageItem}>{props.phrase}</div>
  )
}

