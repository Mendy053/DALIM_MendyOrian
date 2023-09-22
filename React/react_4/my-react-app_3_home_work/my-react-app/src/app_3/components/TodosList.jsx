import React from "react";
import TodoItem from "./TodoItem";

export default function TodosList(props) {
  return (
    <div className="todos-results">
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
