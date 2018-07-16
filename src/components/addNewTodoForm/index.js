import './style.css';
import React, { Component } from 'react';

class AddNewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    const showForm = this.props.showForm;
    if (!showForm) return null;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          className="input-button"
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddNewTodoForm;
