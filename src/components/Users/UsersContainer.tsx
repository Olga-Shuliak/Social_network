import {UserType} from '../../redux/types';
import {RootStateType} from '../../redux/redux-store';

import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage, setIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow
} from '../../redux/reducers/usersReducer';

import React from 'react';
import axios from 'axios';
import {Users} from './Users';

import {Preloader} from '../common/Preloader/Preloader';



type UsersAPI = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: UserType[]) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  setCurrentPage: (currentPage: number) => void
  isFetching: boolean
  setIsFetching: (isFetching: boolean)=> void
}



//классовая компонента для API запросов
class UsersAPIContainer extends React.Component<UsersAPI, any> {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setIsFetching(false);
          this.props.setUsers(response.data.items)
        })
  }

  render() {
    return <div>
      {this.props.isFetching ? <Preloader/> : null}
      <Users currentPage={this.props.currentPage}
             follow={this.props.follow}
             pageSize={this.props.pageSize}
             totalUsersCount={this.props.totalUsersCount}
             unfollow={this.props.unfollow}
             users={this.props.users}
             onPageChanged={this.onPageChanged}/>
    </div>
  }


}

export default UsersAPIContainer;

const mapStateToProps = (state: RootStateType)
    : {
  users: UserType[],
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean
} => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}


export const UsersContainer = connect(mapStateToProps,
    // mapDispatchToProps
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching}
)(UsersAPIContainer)
