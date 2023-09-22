import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function AppTasks() {
  const [tasks, setTasks] = useState([]);

  function onAddTask(task) {
    tasks.push(task);

    setTasks([...tasks]);
  }

  function onDeleteTask(id) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function onCompleteTask(checked, id) {
    const findIndex = tasks.findIndex(task => task.id === id);

    const newTasks = [...tasks];

    newTasks[findIndex].completed = checked;

    setTasks(newTasks);
  }

  return (
    <div>
      <TaskForm onAddTask={onAddTask} />
      <TaskList
        tasks={tasks}
        onCompleteTask={onCompleteTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}
