import React, { useState } from 'react';
import '../styles/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Footer from './Footer';
import { MdKeyboardArrowUp } from 'react-icons/md';
import logo from './logo.svg';

const App = () => {
  const [counter, setCounter] = useState(1);
  const [tasks, setTasks] = useState([]);

  const getFinishDate = () => {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    today = `${dd}-${mm}-${yyyy}`;
    return today;
  };

  const handleChangeStatus = (id) => {
    const newArr = [...tasks];
    newArr.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = getFinishDate();
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
      <div className="appPanel">
        <div className="addTask">
          <AddTask addTask={addTask} />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
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
