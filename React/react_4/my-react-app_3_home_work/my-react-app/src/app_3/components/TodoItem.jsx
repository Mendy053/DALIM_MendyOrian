import React from "react";

export default function TodoItem({ todo }) {
  return (
    <div className="todo">
      <h3>User ID: {todo.userId}</h3>
      <h2>Todo ID: {todo.id}</h2>
      <h1>Todo title: {todo.title}</h1>
      <h2>Completed: {todo.completed ? "Yes" : "No"}</h2>
    </div>
  );
}
