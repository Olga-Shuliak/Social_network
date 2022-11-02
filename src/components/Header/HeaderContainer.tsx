import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/reducers/authReducer';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {RootStateType} from '../../redux/redux-store';


function withRouter(HeaderContainer: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
        <HeaderContainer
            {...props}
            router={{location, navigate, params}}
        />
    );
  }

  return ComponentWithRouterProp;
}

class HeaderContainer extends React.Component<any, any> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
        .then(response => {
          if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            this.props.setAuthUserData(id, email, login);
          }
        })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

let WithUrlDataContainerComponent = withRouter(HeaderContainer)

export default connect(mapStateToProps, {setAuthUserData})(WithUrlDataContainerComponent);
