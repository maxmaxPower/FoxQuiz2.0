import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessege } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
  return { dialogs:state.messegesPage.dialogs,  mymesseges: state.messegesPage.mymesseges,  messegesPage: state.messegesPage,friendmessages: state.messegesPage.friendmessages,  isAuth: state.auth.isAuth };
};

export default compose(
  connect(mapStateToProps, { sendMessege }),
  withAuthRedirect
)(Dialogs);
