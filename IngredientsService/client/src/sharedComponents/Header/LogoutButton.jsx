import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutButton = ({ logout }) => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem('token');
    logout();
    history.push('/');
  };

  return (
    <button type="button" className="btn btn-nav mt-1" onClick={logoutHandler}>
      Logout
    </button>
  );
};

export default LogoutButton;
