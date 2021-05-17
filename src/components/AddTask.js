import React, { Component, useState } from 'react';

const AddTask = (props) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.length > 5) {
      const add = props.addTask(text);
      // setText('');
    } else alert('Task name too short!');
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />{' '}
      <button onClick={handleSubmit}>Add</button>
    </>
  );
};

export default AddTask;
