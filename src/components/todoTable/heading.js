import React from 'react';

function Headings(props) {
  return (
    <tr>
      <th>I.D.</th>
      <th>Task</th>
      <th>Is Completed</th>
      <th>Created Date</th>
      <th>Updated Date</th>
      <th colSpan="2">Actions</th>
    </tr>
  );
}

export default Headings;
