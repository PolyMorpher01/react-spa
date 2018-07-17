import React from 'react';
import { Link } from 'react-router-dom';

import AuthGroup from '../authGroup';

function Header() {
  return (
    <div className="clr-fix">
      <Link to="/">
        <h1 className="heading">Todo App</h1>
      </Link>
      <div className="login-credentials">
        <AuthGroup />
      </div>
    </div>
  );
}

export default Header;