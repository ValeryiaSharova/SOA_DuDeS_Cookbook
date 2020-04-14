import React from 'react';

const LogoutButton = () => {
  const logoutHandler = () => {
    localStorage.removeItem('token');
  };

  return (
    <button type="button" className="btn btn-nav mt-1" onClick={logoutHandler}>
      Logout
    </button>
  );
};

export default LogoutButton;
