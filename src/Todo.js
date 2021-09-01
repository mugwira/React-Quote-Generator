import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoErr, setTodoErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  const toggleComplete = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const styled = {
    fontStyle: "italic",
    color: "red",
    textDecoration: "line-through",
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="bg-yellow-200 w-1/2 md:w-1/3 mx-auto rounded-lg mt-16">
      <form
        className="text-sm md:flex justify-between items-center md:px-8 py-4 md:py-8"
        onSubmit={handleSubmit}
      >
        <div className="my-input">
          <input
            className="py-2 m-4 mb-4 rounded"
            type="text"
            name="todo"
            id=""
            value={todo}
            placeholder="Enter todo task"
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button
          className="text-sm m-4 md:py-2 md:px-4 bg-green-300 rounded hover:bg-green-200"
          type="submit"
        >
          Add Task
        </button>
      </form>

      {todos.map((todo) => (
        <div className="bg-green-100 my-4 py-4 flex justify-between items-center px-2 md:px-6 space-x-6 text-sm">
          <input
            type="checkbox"
            onChange={() => toggleComplete(todo.id)}
            checked={todo.completed}
          />

          <p style={todo.completed ? styled : null}>{todo.text}</p>
          <button
            className="hover:text-red-500"
            onClick={() => handleDelete(todo.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
