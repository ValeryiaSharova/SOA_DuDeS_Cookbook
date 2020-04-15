import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';

const reducers = combineReducers({
  data: reducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
