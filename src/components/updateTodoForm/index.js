import React, { Component } from 'react';

class UpdateTodoForm extends Component {
    constructor(props) {
      super(props);
      this.state = { task: props.task };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({ task: event.target.value });
    }
  
    render() {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.updateTodo(this.state.task);
          }}
        >
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
  
  export default UpdateTodoForm;
  
