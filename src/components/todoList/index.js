import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import TodoTable from '../todoTable';
import AddTodoForm from '../addNewTodoForm';
import * as TodoServices from '../../services/todo';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], showAddNew: false };
    this.toggleAddNew = this.toggleAddNew.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async componentDidMount() {
    if (!localStorage.user) this.props.history.push('/login');
    else await this.fetchTodos();
  }

  toggleAddNew() {
    this.setState(prevState => ({
      showAddNew: !prevState.showAddNew
    }));
  }

  async fetchTodos() {
    const data = await TodoServices.fetchTodos();
    this.setState({ todos: data.data });
    return data;
  }

  async addTodo(task) {
    const data = {
      task
    };

    await TodoServices.addTodo(data);

    await this.fetchTodos();

    this.setState({ showAddNew: false });
  }

  async deleteTodo(id) {
    await TodoServices.deleteTodo(id);
    await this.fetchTodos();
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleAddNew}>Add new todo</button>
        <AddTodoForm addTodo={this.addTodo} showForm={this.state.showAddNew} />
        <h4>Todos</h4>
        <TodoTable todos={this.state.todos} delete={this.deleteTodo} />
      </div>
    );
  }
}

export default withRouter(TodoList);
