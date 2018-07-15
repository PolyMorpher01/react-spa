import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import TodoList from './components/todoList';
import TodoUpdate from './components/todoUpdate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/todos/:id" component={TodoUpdate} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
