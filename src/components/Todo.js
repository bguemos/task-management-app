import Todos from "./Todos";
import React from "react";
import "../styles.css";

export default function Todo(props) {
  const { todo, removeTask, toggleCompleted } = props;

  function handleDelete() {
    removeTask(todo);
  }
  function handleToggle() {
    toggleCompleted(todo);
  }

  return (
    <li className="check">
      <span>
        {todo.completed === true ? <del> {todo.title}</del> : todo.title}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
      </span>
      <div>
        <button className="remove" onClick={handleDelete}>
          Remove
        </button>
      </div>
    </li>
  );
}
