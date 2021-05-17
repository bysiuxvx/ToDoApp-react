import React, { Component, useState } from 'react';

const Task = (props) => {
  const { text, id, urgent, targetDate, active, finishDate } = props.task;

  const style = { color: 'red' };

  const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    let newDate = `${day}-${month}-${year}`;
    return newDate;
  };

  if (active) {
    return (
      <div className="task">
        <p>
          <strong style={urgent ? style : null}>{text}</strong>, id: {id} <br />
          finish by: {targetDate}{' '}
        </p>
        <button onClick={() => props.changeStatus(id)}>Done</button>
      </div>
    );
  } else {
    let finish = new Date(finishDate).toLocaleString();
    finish = finish.slice(0, 10);
    let final = formatDate(finish);
    return (
      <div className="task">
        <p>
          <strong style={urgent ? style : null}>{text}</strong>, id: {id} <br />
          finish by: {targetDate}, finished: {final}{' '}
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
