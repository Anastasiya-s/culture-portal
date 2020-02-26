import React from 'react';

const TaskListItem = ({ mark, text, isDone }) => (
  <li className="task-list-item" >
    <input type="checkbox" readOnly disabled="" checked={isDone}></input> <strong>{mark}</strong> {text}
  </li>);
export default TaskListItem