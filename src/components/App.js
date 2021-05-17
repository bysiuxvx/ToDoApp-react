import React, { Component, useState } from 'react';
import '../styles/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = () => {
  let counter = 5;

  const [tasks, setTasks] = useState([
    {
      text: 'Example 1',
      id: 1,
      urgent: true,
      targetDate: '2021-07-16',
      active: true,
      finishDate: null,
    },
    {
      text: 'Example 2',
      id: 2,
      urgent: false,
      targetDate: '2021-06-03',
      active: true,
      finishDate: 'null',
    },
    {
      text: 'Example 3',
      id: 3,
      urgent: false,
      targetDate: '2021-07-16',
      active: true,
      finishDate: null,
    },
  ]);

  const handleChangeStatus = (id) => {
    const newArr = [...tasks];
    newArr.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    setTasks(newArr);
  };

  const addTask = (text) => {
    const task = {
      text: text,
      id: counter,
      urgent: true,
      active: true,
      targetDate: null,
      finishDate: null,
    };
    console.log(task, tasks);
    setTasks((prev) => ({ ...(prev, task) }));
    counter++;
    return true;
  };

  const deleteTask = (id) => {
    let newArr = [...tasks];
    const index = newArr.findIndex((task) => task.id === id);
    newArr.splice(index, 1);
    setTasks(newArr);
  };

  // const handleChangeStatus = (id) => {
  //   setTasks((prev) =>
  //     prev.map((task) => {
  //       if (task.id === id) {
  //         return { ...task, active: false, finishDate: new Date().getTime() };
  //       } else return task;
  //     })
  //   );
  // };

  return (
    <div className="App">
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        changeStatus={handleChangeStatus}
        delete={deleteTask}
      />
    </div>
  );
};

export default App;
