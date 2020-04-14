import { connect } from 'react-redux';
import IndexPage from './IndexPage';
import * as actions from '../../redux/actions/actions';

const mapStateToProps = state => ({
  token: state.data.token,
});

export default connect(mapStateToProps, actions)(IndexPage);
