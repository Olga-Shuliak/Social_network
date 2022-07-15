import classes from './../Messages.module.css'


export const MessageItem = (props:any) => {
  return (
      <div className={classes.messageItem}>{props.phrase}</div>
  )
}

