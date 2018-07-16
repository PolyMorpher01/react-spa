import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as authService from '../../services/auth';

function AuthGroup(props) {
  const user = localStorage.user;

  async function logout(e) {
    e.preventDefault();
    await authService.logout();
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    props.history.push('/login');
  }

  if (!user) {
    return (
      <div>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  } else {
    return (
      <div>
        Welcome {user}
        <a onClick={logout}>Log Out</a>
      </div>
    );
  }
}

export default withRouter(AuthGroup);
