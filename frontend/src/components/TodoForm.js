// import { useState } from "react";
// import { addTodo } from "../services/api";

// function TodoForm({ refresh }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError]=useState("");
  
// const submit = async (e) => {
//   e.preventDefault();

//   if (!title.trim()) {
//     setError("Title is required");
//     return;
//   }

//   try {
//     await addTodo({
//       title: title.trim(),
//       description: description.trim(),
//       completed: false
//     });

//     setTitle("");
//     setDescription("");
//     setError("");

//     refresh();   

//   } catch (err) {
//     console.log(err.response?.data);
//     setError(
//       err.response?.data?.message ||
//       "Backend rejected request (check title)"
//     );
//   }
// };

// return (
//   <div className="form">

   
//     {error && (
//       <p style={{ color: "red", marginBottom: "10px" }}>
//         {error}
//       </p>
//     )}

//     <input
//       placeholder="title"
//       value={title}
//       onChange={(e) => setTitle(e.target.value)}
//     />

//     <input
//       placeholder="Description"
//       value={description}
//       onChange={(e) => setDescription(e.target.value)}
//     />

//     <button onClick={submit}>Add</button>

//   </div>
// );

// }

// export default TodoForm;
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
