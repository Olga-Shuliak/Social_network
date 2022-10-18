import Profile from './Profile';
import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {addPost, setUserProfile, updateNewPostText} from '../../redux/reducers/profileReducer';


// type ProfileContainerType = {
//   postsData: ProfileType[]
//   newPostText: string
//   addPost: ()=>void
//   updateNewPostText: (text:string)=>void
// }


class ProfileContainer extends React.Component<any, any> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/20`)
        .then(response => {
          this.props.setUserProfile(response.data)
        })
  }

  render() {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
  addPost,
  updateNewPostText,
  setUserProfile
})(ProfileContainer)
