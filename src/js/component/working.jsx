import React, { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([

  ]);
  const [task, setTask] = useState("");

  const handleChangeTask = (ev) => {
    setTask(ev.target.value);
  };

  const handleEnter = (ev) => {
    if (ev.key === "Enter" && task.trim() !== "") {
      setTodos([task.trim(), ...todos]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4">Todo List</h2>

    <div className="flex mb-4 bg-slate-200 b-2 bordercolor-black">
      <input
        className="border px-3 py-2 border border-gray-300 rounded-l w-full"
        placeholder="Task to add" 
        value={task}
        onChange={handleChangeTask}tyu
        onKeyDown={handleEnter}
      />
    </div>
     <ul className="divide-y divide-gray-300">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between">
            {todo}{" "}
            <button
              onClick={() => handleDelete(index)}
              className="ml-auto text-red-500">
              x
            </button>
          </li>
        ))}
      </ul>
<br></br>
      <div>
        {todos.length > 0 ? (
          <span>{todos.length} items left</span>
        ) : (
          <span>No items left</span>
        )}
      </div>

    </div>
  );
}