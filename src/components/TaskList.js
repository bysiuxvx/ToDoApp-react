import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task key={task.id} task={task} changeStatus={props.changeStatus} />
  ));
  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} />
  ));

  return (
    <>
      <h3>Active Tasks ({active.length})</h3>
      <ul>{activeTasks}</ul>
      <hr />
      <h3>Completed Tasks ({done.length})</h3>
      <ul>{doneTasks}</ul>
    </>
  );
};

export default TaskList;
