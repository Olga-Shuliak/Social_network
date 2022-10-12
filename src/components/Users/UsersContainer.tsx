import {UserType} from '../../redux/types';
import {RootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from '../../redux/reducers/usersReducer';

import React from 'react';
import axios from 'axios';
import {Users} from './Users';

type UsersAPI = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: UserType[])=>void
  setTotalUsersCount: (totalUsersCount: number)=>void
  setCurrentPage: (currentPage: number)=>void
}

//классовая компонента для API запросов
class UsersAPIContainer extends React.Component< UsersAPI, any> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
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
return <Users currentPage={this.props.currentPage}
              follow={this.props.follow}
              pageSize={this.props.pageSize}
              totalUsersCount={this.props.totalUsersCount}
              unfollow={this.props.unfollow}
              users={this.props.users}
              onPageChanged={this.onPageChanged}/>
  }


}

export default UsersAPIContainer;

const mapStateToProps = (state: RootStateType)
    : { users: UserType[], pageSize: number, totalUsersCount: number, currentPage: number} =>
{
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalUsersCount: number) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
