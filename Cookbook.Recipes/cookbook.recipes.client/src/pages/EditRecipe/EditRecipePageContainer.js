import { connect } from "react-redux";
import EditRecipePage from "./EditRecipePage";
import * as actions from "../../redux/actions/actions";

const mapStateToProps = (state) => ({
  token: state.data.token,
});

export default connect(mapStateToProps, actions)(EditRecipePage);
