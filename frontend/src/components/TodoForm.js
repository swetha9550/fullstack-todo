import { useState } from "react";
import { addTodo } from "../services/api";

function TodoForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await addTodo({ title, description, completed: false });
    setTitle("");
    setDescription("");
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
