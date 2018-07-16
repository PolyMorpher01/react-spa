import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import TodoList from './components/todoList';
import TodoUpdate from './components/todoUpdate';
import RegisterUser from './components/register';
import LoginUser from './components/loginUser';
import AuthGroup from './components/authGroup';

class App extends Component {
  render() {
    const user = localStorage.user;
    const homeComponent = user ? TodoList : LoginUser;
    return (
      <div className="App">
        <Router>
          <div>
            <div className="clr-fix">
              <Link to="/">
                <h1 className="heading">Todo App</h1>
              </Link>
              <div className="login-credentials">
                <AuthGroup />
              </div>
            </div>

            <hr />

            <Route exact path="/" component={TodoList} />
            <Route exact path="/todos/:id" component={TodoUpdate} />
            <Route exact path="/register" component={RegisterUser} />
            <Route exact path="/login" component={LoginUser} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
