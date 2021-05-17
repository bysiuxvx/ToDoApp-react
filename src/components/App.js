import React, { Component, useState } from 'react';
import '../styles/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = () => {
  const [counter, setCounter] = useState(1);
  const [tasks, setTasks] = useState([
    // {
    //   text: 'Example 1',
    //   id: 1,
    //   urgent: true,
    //   targetDate: '2021-07-16',
    //   active: true,
    //   finishDate: null,
    // },
    // {
    //   text: 'Example 2',
    //   id: 2,
    //   urgent: false,
    //   targetDate: '2021-06-03',
    //   active: true,
    //   finishDate: 'null',
    // },
    // {
    //   text: 'Example 3',
    //   id: 3,
    //   urgent: false,
    //   targetDate: '2021-07-16',
    //   active: true,
    //   finishDate: null,
    // },
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

  const addTask = (text, urgent, date) => {
    const newArr = [...tasks];
    const task = {
      text: text,
      id: counter,
      urgent,
      active: true,
      targetDate: date,
      finishDate: null,
    };
    // console.log(task, tasks);
    newArr.push(task);
    setTasks(newArr);
    setCounter((prev) => prev + 1);
    return true;
  };

  const deleteTask = (id) => {
    let newArr = [...tasks];
    const index = newArr.findIndex((task) => task.id === id);
    newArr.splice(index, 1);
    setTasks(newArr);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Task list</h1>
        <AddTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          changeStatus={handleChangeStatus}
          delete={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
