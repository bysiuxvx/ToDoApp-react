import React, { Component, useState } from 'react';
import '../styles/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { MdKeyboardArrowUp } from 'react-icons/md';

const App = () => {
  const [counter, setCounter] = useState(1);
  const [tasks, setTasks] = useState([]);

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

  const addTask = (text, urgent, targetDate, creationDate) => {
    const newArr = [...tasks];
    const task = {
      text: text,
      id: counter,
      urgent,
      active: true,
      creationDate,
      targetDate,
      finishDate: null,
    };

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
    <div className="app">
      <header>
        <h2>Task list</h2>
      </header>
      <div className="appPanel">
        <div className="addTask">
          <AddTask addTask={addTask} />
        </div>
        <div className="taskList">
          <TaskList
            tasks={tasks}
            changeStatus={handleChangeStatus}
            delete={deleteTask}
          />
        </div>
      </div>
      <footer>
        <MdKeyboardArrowUp className="arrow" />
        <Footer />
      </footer>
    </div>
  );
};

export default App;
