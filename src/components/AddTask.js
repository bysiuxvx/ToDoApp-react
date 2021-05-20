import React, { useState } from 'react';
import '../styles/addtask.css';
import { motion } from 'framer-motion';

const AddTask = (props) => {
  const minDate = new Date().toISOString().slice(0, 10);

  const [text, setText] = useState('');
  const [urgent, setUrgent] = useState(false);
  const [date, setDate] = useState(minDate);

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    let newDate = `${day}-${month}-${year}`;
    return newDate;
  };

  const handleSubmit = () => {
    let fixedDate = formatDate(date);
    if (text.length > 0) {
      props.addTask(text, urgent, fixedDate);
      setText('');
      setUrgent(false);
      setDate(minDate);
    } else alert('Task name too short!');
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
              whileFocus={{ scale: 1.025, boxShadow: 'inset 0 0 0.5em gold' }}
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
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </div>

          <label class="checkbox-label">
            {' '}
            <div className="title">Urgent?</div>
            <input
              type="checkbox"
              checked={urgent}
              onChange={(event) => setUrgent(event.target.checked)}
            />
            <span class="checkbox-custom rectangular"></span>
          </label>
        </div>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
};

export default AddTask;
