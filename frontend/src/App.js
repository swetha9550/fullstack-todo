// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// import "./App.css";

// function App() {
//   return (
//     <div className="container">
//       <h1>Todo</h1>
//       <TodoList />
//     </div>
//   );
// }

// export default App;
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App</h2>
      <TodoForm refresh={refresh} />
      <TodoList />
    </div>
  );
}

export default App;
