import React, { Component } from 'react';

import UpdateTodoForm from '../updateTodoForm';

class TodoUpdate extends Component {
  constructor(props) {
    super(props);
    const updateId = props.match.params.id;    
  }

  render() {
    //TODO
    return <UpdateTodoForm />;
  }
}

export default TodoUpdate;
