import React, { Component, useState } from 'react';

const Task = (props) => {
  const { text, id, urgent, targetDate, active } = props.task;

  const style = { color: 'red' };

  if (active) {
    return (
      <p>
        <strong style={urgent ? style : null}>{text}</strong>, id: {id}, target
        date: {targetDate} <button onClick={props.changeStatus}>Done</button>
      </p>
    );
  } else {
    return (
      <p>
        <strong style={urgent ? style : null}>{text}</strong>, id: {id}, target
        date: {targetDate}
      </p>
    );
  }
};

export default Task;
