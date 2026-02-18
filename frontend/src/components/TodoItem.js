
import { deleteTodo, updateTodo } from "../services/api";

function TodoItem({ todo, refresh }) {
  const toggle = async () => {
    await updateTodo(todo.id, {
      ...todo,
      completed: !todo.completed
    });
    refresh();
  };

  const remove = async () => {
    await deleteTodo(todo.id);
    refresh();
  };

  return (
    <li>
      <b>{todo.title}</b> - {todo.description} - {todo.completed ? "Done" : "Pending"}
      <button onClick={toggle}>Toggle</button>
      <button onClick={remove}>Delete</button>
    </li>
  );
}

export default TodoItem;
