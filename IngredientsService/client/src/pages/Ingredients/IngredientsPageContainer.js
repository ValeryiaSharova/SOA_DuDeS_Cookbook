import { connect } from 'react-redux';
import IngredientsPage from './IngredientsPage';
import * as actions from '../../redux/actions/actions';

const mapStateToProps = state => ({
  token: state.data.token,
});

export default connect(mapStateToProps, actions)(IngredientsPage);
