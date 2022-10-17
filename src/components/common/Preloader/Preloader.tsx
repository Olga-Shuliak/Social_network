import classes from '../../Users/Users.module.css';
import preloader from '../../../assets/images/Circles-menu-3.gif';
import React from 'react';

export const Preloader = ()=> {
  return <div className={classes.preloader}><img src={preloader} alt='load'/></div>
}
