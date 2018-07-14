import React, { Component } from 'react';
import './style.css';

import Headings from './heading';
import Items from './items'

const data = [
    { "id": 1, "task": "shopping", "isCompleted": "false", "createdDate": "12 july 2018" },
    { "id": 2, "task": "milk", "isCompleted": "false", "createdDate": "12 july 2018" },
    { "id": 3, "task": "task-3", "isCompleted": "false", "createdDate": "12 july 2018" },
    { "id": 4, "task": "task-4", "isCompleted": "false", "createdDate": "12 july 2018" },
    { "id": 5, "task": "task-5", "isCompleted": "true", "createdDate": "12 july 2018" },
    { "id": 6, "task": "task-6", "isCompleted": "true", "createdDate": "12 july 2018" },
    { "id": 7, "task": "task-7", "isCompleted": "false", "createdDate": "12 july 2018" },
    { "id": 8, "task": "task-8", "isCompleted": "false", "createdDate": "12 july 2018" },
    { "id": 9, "task": "task-9", "isCompleted": "false", "createdDate": "12 july 2018" },
    { "id": 10, "task": "task-10", "isCompleted": "true", "createdDate": "12 july 2018" }
  ]

function TodoTable(props) {
  return (
    <table>
      <thead>
        <Headings />
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Go Shopping</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>12 july</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Go Shopping</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>12 july</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Go Shopping</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>12 july</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TodoTable;
