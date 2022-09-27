import React from 'react'
import { connect } from "react-redux";
import { compose } from "redux";
import { deleteTask } from '../../redux/premiumStatus-reducer';
import PremiumStatusPage from './PremiumStatusPage';

const PremiumStatusPageContainer = (props) => {
  return (
    <PremiumStatusPage subscriptions={props.subscriptions} deleteTask={props.deleteTask}/>
  );
};

let mapStateToProps = (state) => {
  return {
    premiumStatus: state.premiumStatus,
    subscriptions: state.premiumStatus.subscriptions
  };};

export default compose(connect(mapStateToProps,{ deleteTask }))(PremiumStatusPageContainer);
