import { handleActions } from 'redux-actions';
import { login, logout } from '../actions/actions';

const initialState = { token: null };

const reducer = handleActions(
  {
    [logout]: state => ({ ...state, token: null }),
    [login]: (state, { payload: token }) => ({ ...state, token }),
  },
  initialState
);

export default reducer;
