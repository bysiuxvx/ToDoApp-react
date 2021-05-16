import React, { Component, useState } from 'react';
import './App.css';
import AddTask from '../src/components/AddTask';
import TaskList from '../src/components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: 'Example 1',
      id: 1,
      urgent: true,
      targetDate: '2021-07-16',
      active: true,
    },
    {
      text: 'Example 2',
      id: 2,
      urgent: false,
      targetDate: '2021-06-03',
      active: false,
    },
    {
      text: 'Example 3',
      id: 3,
      urgent: true,
      targetDate: '2021-07-16',
      active: true,
    },
  ]);

  const handleChangeStatus = (id) => {
    const tasks = [...tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
      }
    });
    setTasks(tasks);
  };

  return (
    <div className="App">
      <AddTask />
      <TaskList tasks={tasks} changeStatus={handleChangeStatus} />
    </div>
  );
};

export default App;
