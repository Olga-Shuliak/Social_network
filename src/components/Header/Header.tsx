import classes from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = (props: any) => {
  return (
      <header className={classes.header}>
        <img
            src="https://as1.ftcdn.net/v2/jpg/03/95/92/58/1000_F_395925895_ylqFTXLhOeyeN5PUxTy62H2JaxtmDwr2.jpg"
            alt="logo"/>

        <div className={classes.loginBlock}>
          {props.isAuth ? props.login
          : <Link to={'/login'}>Login</Link>}
        </div>
      </header>
  )
}

export default Header;
