import React, { Component } from 'react';

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
    this.updateTodo = this.updateTodo.bind(this);
  }

  async componentDidMount() {
    await this.fetchTodos();
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

  deleteTodo(id) {
    let todos = Object.assign([], this.state.todos);

    const index = todos.findIndex(todo => {
      return (todo.id = id);
    });

    todos.splice(index, 1);

    this.setState({ todos: todos });
  }

  updateTodo(id) {
    /*  let todos = Object.assign([], this.state.todos);

    const index = todos.findIndex(todo => {
      return (todo.id = id);
    });

    const updateDate = todos[index].createdDate;

    let date = new Date(updateDate);

    date.setDate(date.getDate() + 1);

    todos[index].createdDate = date.toString();

    this.setState({ todos: todos }); */
    return;
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleAddNew}>Add new todo</button>
        <AddTodoForm addTodo={this.addTodo} showForm={this.state.showAddNew} />
        <h4>Todos</h4>
        <TodoTable
          todos={this.state.todos}
          delete={this.deleteTodo}
          update={this.updateTodo}
        />
      </div>
    );
  }
}

export default TodoList;
