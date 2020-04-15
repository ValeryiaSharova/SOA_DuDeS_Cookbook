import { connect } from "react-redux";
import Header from "./Header";
import * as actions from "../../redux/actions/actions";

const mapStateToProps = (state) => ({
  token: state.data.token,
});

export default connect(mapStateToProps, actions)(Header);
