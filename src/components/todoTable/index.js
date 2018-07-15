import React, { Component } from 'react';
import './style.css';

import Headings from './heading';
import Items from './items';

function TodoTable(props) {
  return (
    <table>
      <thead>
        <Headings />
      </thead>
      <tbody>
        {props.todos.map(item => (
          <Items key={item.id} todo={item} delete={props.delete} update = {props.update}/>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
