import Profile from './Profile';
import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {addPost, setUserProfile, updateNewPostText} from '../../redux/reducers/profileReducer';

import {useLocation, useNavigate, useParams} from 'react-router-dom';


// type ProfileContainerType = {
//   postsData: ProfileType[]
//   newPostText: string
//   addPost: ()=>void
//   updateNewPostText: (text:string)=>void
// }

function withRouter(ProfileContainer: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
        <ProfileContainer
            {...props}
            router={{ location, navigate, params }}
        />
    );
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component<any, any> {

  componentDidMount() {

    let userId = this.props.router.params.userId
    if (!userId) userId = 2

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  addPost,
  updateNewPostText,
  setUserProfile
})(WithUrlDataContainerComponent)
