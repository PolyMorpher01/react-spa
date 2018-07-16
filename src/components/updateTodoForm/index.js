import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

import './style.css';

class UpdateTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '', isCompleted: 'false' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const data = await this.props.get();
    this.setState({
      task: data.data.task,
      isCompleted: data.data.is_completed
    });
  }

  handleInputChange(event) {
    this.setState({ task: event.target.value });
  }

  handleCheckBoxChange(event) {
    this.setState(prevState => ({
      isCompleted: !prevState.isCompleted
    }));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const updatedData = {
      task: this.state.task,
      is_completed: this.state.isCompleted
    };

    await this.props.update(updatedData);
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleInputChange}
          className="input-button"
        />
        <input
          type="checkbox"
          checked={this.state.isCompleted}
          onChange={this.handleCheckBoxChange}
        />
        <label>Completed</label>
        <div className="update-button">
          <button type="submit">Update Item</button>
        </div>
      </form>
    );
  }
}

export default withRouter(UpdateTodoForm);
