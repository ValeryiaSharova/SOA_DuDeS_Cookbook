import { connect } from "react-redux";
import AboutPage from "./AboutPage";
import * as actions from "../../redux/actions/actions";

const mapStateToProps = (state) => ({
  token: state.data.token,
});

export default connect(mapStateToProps, actions)(AboutPage);
