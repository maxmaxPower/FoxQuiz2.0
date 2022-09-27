import { connect } from "react-redux";
import { compose } from "redux";
import Navbar from "./Navbar";

const NavbarContainer = (props) =>{
  return < Navbar {...props} />
}

let mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
    navObjects: state.navbar.navObjects,
    bestFriends: state.navbar.bestFriends,
  };
};
export default compose(connect(mapStateToProps))(NavbarContainer);