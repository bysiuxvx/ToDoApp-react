import React, { useState } from 'react';

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
    if (text.length > 5) {
      props.addTask(text, urgent, fixedDate);
      setText('');
      setUrgent(false);
      setDate(minDate);
    } else alert('Task name too short!');
  };

  return (
    <>
      <div className="newTaskPanel">
        <label html="task name">
          Task name
          <input
            type="text"
            placeholder={'What needs to be done?'}
            maxLength="30"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>{' '}
        <label htmlFor="urgent">
          Is it urgent?
          <input
            type="checkbox"
            checked={urgent}
            onChange={(event) => setUrgent(event.target.checked)}
          />
        </label>
        <br />
        <label htmlFor="date">
          Finish by{' '}
          <input
            type="date"
            min={minDate}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
};

export default AddTask;
