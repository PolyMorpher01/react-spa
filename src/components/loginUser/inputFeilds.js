import React, {Fragment } from 'react';

function InputFeilds(props){

    function handleUserNameChange(e) {
        props.handleUserNameChange(e.target.value);
      }
    
      function handlePasswordChange(e) {
        props.handlePasswordChange(e.target.value);
      }

    return(
        <Fragment>
            <div className="mgb20">
        <label>User Name:</label>
        <br />
        <input
          type="text"
          value={props.userName}
          onChange={handleUserNameChange}
          required
        />
      </div>
      <div className="mgb20">
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={props.password}
          onChange={handlePasswordChange}
          required
        />
      </div>
        </Fragment>
    );
}

export default InputFeilds;