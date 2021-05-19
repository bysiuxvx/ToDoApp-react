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

  // return part

  const activeList = (
    <div className="activeList">
      <h3>Active Tasks ({active.length})</h3>
      <ul>{activeTasks}</ul>
    </div>
  );

  const ifActiveEmpty = (
    <h3>
      There's nothing to do <br /> enjoy it while you can <br />{' '}
      <span style={{ fontSize: 30 }}>( ͡° ͜ʖ ͡°)</span>
    </h3>
  );

  const completedList = (
    <>
      <div className="completedList">
        <h3>Completed Tasks ({done.length})</h3>
        <ul>{doneTasks}</ul>
      </div>
    </>
  );

  return (
    <>
      {active.length > 0 ? activeList : ifActiveEmpty}

      {done.length > 0 ? completedList : null}
    </>
  );
};

export default TaskList;
