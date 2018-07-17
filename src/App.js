import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import TodoList from './components/todoList';
import TodoUpdate from './components/todoUpdate';
import RegisterUser from './components/register';
import LoginUser from './components/loginUser';
import Header from './components/header';

class App extends Component {
  render() {
    const user = localStorage.user;
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
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
