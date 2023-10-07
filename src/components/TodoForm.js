import { useState } from "react";
import { nanoid } from "nanoid";

export default function TodoForm(props) {
  const [title, setTitle] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      title: title,
      completed: false,
      id: nanoid()
    };
    props.addTask(newTask);
    setTitle("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Add new task.."
          value={title}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
