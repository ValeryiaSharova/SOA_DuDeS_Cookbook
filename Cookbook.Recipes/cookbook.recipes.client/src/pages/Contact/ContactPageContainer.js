import { connect } from "react-redux";
import ContactPage from "../Contact/ContactPage";
import * as actions from "../../redux/actions/actions";

const mapStateToProps = (state) => ({
  token: state.data.token,
});

export default connect(mapStateToProps, actions)(ContactPage);
