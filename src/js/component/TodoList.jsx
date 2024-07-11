import React, { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && todoInput.trim() !== '') {
      const newTodo = {
        index: todos.length + 1,
        text: todoInput.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoInput('');
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = todos.map((todo) =>
      todo.index === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo) => todo.index !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

      <div className="flex mb-4">
      <input
          type="text"
          className="flex-1 border border-gray-300 rounded py-2 px-3 mr-2"
          placeholder="Enter a todo..."
          value={todoInput}
          onChange={handleInputChange}
          onKeyDown={handleAddTodo}
        />
      </div>

      <ul className="divide-y divide-gray-300">
        {todos.map((todo) => (
          <li className="flex items-center py-2" key={todo.index}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.index)}
                className="mr-2"
            />
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.text}
              </span>     
                      
            <button
              className="ml-auto text-red-500"
              onClick={() => handleDeleteTodo(todo.index)}
            >
              &#10005;
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