import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function LoginButtons(props) {
  async function handleSubmit(e) {
    e.preventDefault();
    await props.login();
    console.log(localStorage.user);
    props.history.push('/');
  }

  return (
    <Fragment>
      <button type="submit" className="mgr20" onClick={handleSubmit}>
        Login
      </button>
      <button>Cancel</button>
    </Fragment>
  );
}

export default withRouter(LoginButtons);
