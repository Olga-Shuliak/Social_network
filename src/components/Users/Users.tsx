import React from 'react';
import {UserType} from '../../redux/types';
import classes from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/img.png'

type UsersProps = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setCurrentPage: (pageNumber: number)=> void
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: UserType[]) => void
  setTotalUsersCount:  (totalUsersCount: number)=> void
}

class Users extends React.Component<UsersProps, any> {

  // constructor(props: UsersProps) {
  //   super(props);
  // } - если нет ничего другого, кроме супера, то не пишем. это есть по умолчанию

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          // console.log(response.data.totalCount)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
        })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
        <div>
          <div className={classes.usersWrapper}>
            {pages.map(p => {
              return (
              <span
                  className={this.props.currentPage === p ? classes.selectedPage : ''}
                  onClick={(event) => {
                    this.onPageChanged(p)
                  }}>{p}</span>)
            })}
          </div>

          {
            this.props.users.map((user: UserType) => <div key={user.id}>
            <span>
              <div>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                     className={classes.userPhoto}
                     alt="avatar"/>
              </div>
              <div>
                {user.followed
                    ? <button onClick={() => {
                      this.props.unfollow(user.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                      this.props.follow(user.id)
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


}

export default Users;
