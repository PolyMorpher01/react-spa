import React, { Component } from 'react';

import * as TodoServices from '../../services/todo';
import UpdateTodoForm from '../updateTodoForm';

class TodoUpdate extends Component {
  constructor(props) {
    super(props);
    this.updateId = props.match.params.id;
    this.getTodo = this.getTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  async getTodo() {
    return await TodoServices.fetchById(this.updateId);
  }

  async updateTodo(data){
    await TodoServices.updateTodo(data, this.updateId);
  }

  render() {
    return <UpdateTodoForm get={this.getTodo} update={this.updateTodo} />;
  }
}

export default TodoUpdate;
