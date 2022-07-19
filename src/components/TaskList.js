import React from "react";

function TaskList({ Task }) {
  const tasks = Task.map(function (task) {

    return <li key={task.index}>{task.text}</li>;
  });
  console.log(tasks);
  
      /* display a list of tasks using Task component */
  return <div className="tasks">{tasks}</div>;
}

export default TaskList;
