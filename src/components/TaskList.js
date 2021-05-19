import React from 'react';
import Task from './Task';
import '../styles/tasklist.css';

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task key={task.id} task={task} changeStatus={props.changeStatus} />
  ));
  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} />
  ));

  const completedList = (
    <>
      <hr />
      <div className="completedList">
        <h3>Completed Tasks ({done.length})</h3>
        <ul>{doneTasks}</ul>
      </div>
    </>
  );

  return (
    <>
      {active.length > 0 ? (
        <div className="activeList">
          <h3>Active Tasks ({active.length})</h3>
          <ul>{activeTasks}</ul>
        </div>
      ) : (
        <h3>There's nothing to do, enjoy while you can ( ͡° ͜ʖ ͡°)</h3>
      )}

      {done.length > 0 ? completedList : null}
    </>
  );
};

export default TaskList;
