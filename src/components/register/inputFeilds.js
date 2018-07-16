import React, { Fragment } from 'react';

function RegisterInputFeilds(props) {
  function handleUserNameChange(e) {
    props.handleUserNameChange(e.target.value);
  }

  function handleEmailChange(e) {
    props.handleEmailChange(e.target.value);
  }

  function handlePasswordChange(e) {
    props.handlePasswordChange(e.target.value);
  }

  return (
    <Fragment>
      <div className="mgb20">
        <label>User Name:</label>
        <br />
        <input
          type="text"
          value={props.info.userName}
          onChange={handleUserNameChange}
          required
        />
      </div>
      <div className="mgb20">
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={props.info.email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="mgb20">
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={props.info.password}
          onChange={handlePasswordChange}
          required
        />
      </div>
    </Fragment>
  );
}

export default RegisterInputFeilds;
