import React, { useState } from 'react';
import '../styles/addtask.css';
import { motion } from 'framer-motion';

const AddTask = (props) => {
  const minDate = new Date().toISOString().slice(0, 10);

  const [text, setText] = useState('');
  const [important, setImportant] = useState(false);
  const [date, setDate] = useState(minDate);

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    let newDate = `${day}-${month}-${year}`;
    return newDate;
  };

  const handleSubmit = () => {
    let targetDate = formatDate(date);
    let creationDate = formatDate(minDate);

    if (text.length > 4) {
      props.addTask(text, important, targetDate, creationDate);
      setText('');
      setImportant(false);
      setDate(minDate);
    } else alert('Task name is too short, describe it a bit more!');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="newTaskPanel" onKeyDown={handleKeyDown}>
        <div className="form">
          <label html="task name">
            Task name
            <motion.input
              type="text"
              placeholder={'What needs to be done?'}
              maxLength="30"
              value={text}
              onChange={(event) => setText(event.target.value)}
              whileFocus={{ scale: 1.025 }}
            />
          </label>
          <br />
          <div className="datePicker">
            <label htmlFor="date">
              Finish by{' '}
              <input
                type="date"
                min={minDate}
                value={date}
                onChange={(event) => {
                  if (event.target.value === '') {
                    alert('Choose a correct date!');
                  } else setDate(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="checkBox">
            <label>
              Important{' '}
              <input
                type="checkbox"
                checked={important}
                onChange={(event) => setImportant(event.target.checked)}
              />
            </label>
          </div>
        </div>
        <button className="submitBtn" onClick={handleSubmit}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default AddTask;
