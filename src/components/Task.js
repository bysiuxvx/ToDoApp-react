import React, { Component, useState } from 'react';
import '../styles/task.css';
import { IoMdClose } from 'react-icons/io';
import { MdDone } from 'react-icons/md';

const Task = (props) => {
  const { text, id, urgent, targetDate, creationDate, active, finishDate } =
    props.task;

  const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    let newDate = `${day}-${month}-${year}`;
    return newDate;
  };

  if (active) {
    return (
      <div className={urgent ? 'task urgent' : 'task'}>
        <p>
          <strong>{text}</strong>, #{id} <br />
          Created: {creationDate}, Finish by: {targetDate}{' '}
        </p>
        <button
          onClick={() => props.changeStatus(id)}
          style={{ color: 'green' }}>
          <MdDone />
        </button>
      </div>
    );
  } else {
    // let finish = new Date(finishDate).toLocaleString();
    // finish = finish.slice(0, 10);
    // finish = formatDate(finish);
    // console.log(finish, JSON.stringify(finish));
    return (
      <div className={urgent ? 'task urgent' : 'task'}>
        <p>
          <strong>{text}</strong>, #{id} <br />
          Finish by: {targetDate}, Finished: {finishDate}{' '}
        </p>
        <button className="taskDelete" onClick={() => props.delete(id)}>
          <IoMdClose style={{ marginTop: 3.5 }} />
        </button>
      </div>
    );
  }
};

export default Task;
