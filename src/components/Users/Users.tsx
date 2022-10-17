import React from 'react';
import {UserType} from '../../redux/types';
import classes from './Users.module.css'
import userPhoto from '../../assets/images/img.png'

export type UsersProps = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number)=> void
  follow: (userID: number) => void
  unfollow: (userID: number) => void
}

// функциональная компонента: вся логика в UsersContainer
export const Users =(props: UsersProps)=> {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
        <div>
          <div className={classes.pagination}>
            {pages.map(p => {
              return (
              <span
                  className={props.currentPage === p ? classes.selectedPage : ''}
                  onClick={() => {
                    props.onPageChanged(p)
                  }}>{p}</span>)
            })}
          </div>

          {
            props.users.map((user: UserType) => <div key={user.id}>
            <span>
              <div>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                     className={classes.userPhoto}
                     alt="avatar"/>
              </div>
              <div>
                {user.followed
                    ? <button onClick={() => {
                      props.unfollow(user.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                      props.follow(user.id)
                    }}>Follow</button>}
              </div>
            </span>
              <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
              <span>
                <div>{'user.location.city'}</div>
              <div>{'user.location.country'}</div>
              </span>
          </span>
            </div>)
          }
        </div>
    )


}


