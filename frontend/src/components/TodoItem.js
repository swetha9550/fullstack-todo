// import { deleteTodo, updateTodo } from "../services/api";

// function TodoItem({ todo, refresh }) {
//   const edit = async () => {
//   const newTitle = prompt("Enter new title", todo.title);
//   const newDesc = prompt("Enter new description", todo.description);

//   if (!newTitle) return;

//   await updateTodo(todo.id, {
//     ...todo,
//     title: newTitle,
//     description: newDesc
//   });

//   window.location.reload();
// };

//   const toggle = async () => {
//     await updateTodo(todo.id, {
//       ...todo,
//       completed: !todo.completed
//     });
//     refresh();
//   };

//   const remove = async () => {
//     await deleteTodo(todo.id);
//     refresh();
//   };

// return (
//   <div className="todo-item">
//     <div className="todo-left">
//       <input
//         type="checkbox"
//         checked={todo.completed}
//         onChange={() => toggle()}
//       />
//       <div className={todo.completed ? "completed" : ""}>
//         <b>{todo.title}</b>
//         <div style={{ fontSize: "12px", color: "#666" }}>
//           {todo.description}
//         </div>
//       </div>
//     </div>

//     <div className="actions">
//       <button className="edit-btn" onClick={edit}>Edit</button>
//       <button className="delete-btn" onClick={remove}>Delete</button>
//     </div>
//   </div>
// );

// }

// export default TodoItem;
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
