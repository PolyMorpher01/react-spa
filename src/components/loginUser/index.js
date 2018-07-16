import React, { Component } from 'react';

import * as authService from '../../services/auth';

import InputFeilds from './inputFeilds';
import LoginButtons from './loginButtons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleUserNameChange(value) {
    this.setState({ userName: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  async loginUser() {
    const userInfo = {
      user_name: this.state.userName,
      password: this.state.password
    };

    const {data} = await authService.loginUser(userInfo);
    localStorage.setItem('accessToken',data.authToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('user',this.state.userName);
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form>
          <InputFeilds
            userName={this.state.userName}
            password={this.state.password}
            handleUserNameChange={this.handleUserNameChange}
            handlePasswordChange={this.handlePasswordChange}
          />
          <LoginButtons login={this.loginUser} />
        </form>
      </div>
    );
  }
}

export default Login;
