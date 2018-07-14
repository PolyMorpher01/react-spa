import React, { Component } from 'react';
import './App.css';

import TodoTable from './components/todoTable/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoTable/>
      </div>
    );
  }
}

export default App;
