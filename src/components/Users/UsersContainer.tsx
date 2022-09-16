import {UsersPageType, UserType} from '../../redux/types';
import {RootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC} from '../../redux/reducers/usersReducer';
import {Users} from './Users';



const mapStateToProps = (state: RootStateType): { users: UserType[] } => {
  return {
    users: state.usersPage.users
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
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
