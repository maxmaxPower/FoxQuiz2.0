import React from "react";
import { connect } from "react-redux";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus
} from "../../redux/profile-reducer";
import Profile from "./Profile";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  
componentRefresh = () => {
  let userId = this.props.router.params.userId;
  if (!userId) {
    userId = this.props.authorizedUserId ;  // if userid undef => userid = props.myprofile
  }
  this.props.getUserProfile(userId  );
  this.props.getStatus(userId)
};

  componentDidMount() {  
    this.componentRefresh();
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    if (this.props.router.params.userId != prevProps.router.params.userId ){
      this.componentRefresh();
    } 
  }

  render() {
    return <Profile {...this.props} updatelookingForAJobStatus = {this.props.updatelookingForAJobStatus} savePhoto = {this.props.savePhoto} isOwner={!this.props.router.params.userId}  profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

let mapStateToProps = (state) => {
 return {
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
 }
};
export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus , savePhoto,saveProfile}),
  withRouter,withAuthRedirect
)(ProfileContainer);
