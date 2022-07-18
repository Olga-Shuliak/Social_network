import classes from './../Messages.module.css'
import {NavLink} from 'react-router-dom';


const DialogItem = (props: any) => {

  let path = '/messages/' + props.id;

  return (
      <div className={classes.dialogsItem}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}


export default DialogItem;
