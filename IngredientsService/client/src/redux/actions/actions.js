import { createAction } from 'redux-actions';

export const login = createAction('LOGIN', token => token);

export const logout = createAction('LOGOUT');
