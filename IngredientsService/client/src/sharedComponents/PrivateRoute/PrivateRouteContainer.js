import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import * as actions from '../../redux/actions/actions';

const mapStateToProps = state => ({
  token: state.data.token,
});

export default connect(mapStateToProps, actions)(PrivateRoute);
