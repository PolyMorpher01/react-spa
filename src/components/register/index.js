import React, { Component } from 'react';
import * as userServices from '../../services/users';

import RegisterInputFeilds from './inputFeilds';
import RegisterButtons from './registerButtons';

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        userName: '',
        email: '',
        password: ''
      }
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleUserNameChange(value) {
    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
        userName: value
      }
    }));
  }

  handleEmailChange(value) {
    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
        email: value
      }
    }));
  }

  handlePasswordChange(value) {
    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
        password: value
      }
    }));
  }

  async addUser() {
    const userInfo = this.state.userInfo;
    await userServices.register(userInfo);
  }

  render() {
    return (
      <div>
        <h3>Register</h3>
        <form>
          <RegisterInputFeilds
            info={this.state.userInfo}
            handleUserNameChange={this.handleUserNameChange}
            handleEmailChange={this.handleEmailChange}
            handlePasswordChange={this.handlePasswordChange}
          />
          <RegisterButtons addUser={this.addUser} />
        </form>
      </div>
    );
  }
}

export default RegisterUser;
