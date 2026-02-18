import { useEffect, useState } from "react";
import { getTodos } from "../services/api";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const load = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <ul>
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} refresh={load}/>
      ))}
    </ul>
  );
}

export default TodoList;
