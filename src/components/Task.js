import React, { Component, useState } from 'react';

const Task = (props) => {
  const { text, id, urgent, targetDate, active, finishDate } = props.task;

  const style = { color: 'red' };

  if (active) {
    return (
      <p>
        <strong style={urgent ? style : null}>{text}</strong>, id: {id}, finish
        by: {targetDate}{' '}
        <button onClick={() => props.changeStatus(id)}>Done</button>
      </p>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <p>
        <strong style={urgent ? style : null}>{text}</strong>, id: {id}, finish
        by: {targetDate}, finished: {finish}{' '}
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    );
  }
};

export default Task;
