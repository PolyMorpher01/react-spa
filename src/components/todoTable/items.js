import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import dateUtils from '../../utils/date';

function Items(props) {
  const createdDate = dateUtils.formatDate(props.todo.created_at);
  return (
    <tr>
      <td>{props.todo.id}</td>
      <td>{props.todo.task}</td>
      <td>{props.todo.is_completed ? 'true' : 'false'}</td>
      <td>{createdDate}</td>
      <td>
        <Link to={'/todos/' + props.todo.id}>
          <button>Update</button>
        </Link>
      </td>
      <td>
        <button
          onClick={e => {
            props.delete(props.todo.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Items;
