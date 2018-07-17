import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as authService from '../../services/auth';

function AuthGroup(props) {
  const user = localStorage.user;

  async function logout() {
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
        <span className="hover-pointer mgl20" onClick={logout}>Log Out</span>
      </div>
    );
  }
}

export default withRouter(AuthGroup);
