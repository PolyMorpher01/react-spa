import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function RegisterButtons(props) {
  async function handleSubmit(e) {
    e.preventDefault();
    await props.addUser();
    props.history.push('/');
  }

  return (
    <Fragment>
      <button type="submit" className="mgr20" onClick={handleSubmit}>
        Register
      </button>
      <button>Cancel</button>
    </Fragment>
  );
}

export default withRouter(RegisterButtons);
