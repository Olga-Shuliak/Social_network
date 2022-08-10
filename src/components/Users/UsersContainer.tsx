import {UsersDataType, UsersPageType} from '../../redux/types';
import {RootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Messages} from '../Messages/Messages';
import {followAC, setUsersAC, unfollowAC} from '../../redux/reducers/usersReducer';


const mapStateToProps = (state: RootStateType): { usersPage: UsersPageType } => {
  return {
    usersPage: state.usersPage
  }
}
const mapDispatchToProps = (dispatch: Dispatch): {} => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (users: UsersDataType[]) => {
      dispatch(setUsersAC(users))
    }
  }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
