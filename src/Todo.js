import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoErr, setTodoErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      let error = {
        field_id: "todo",
        message: "Please enter a task to do",
      };
      setTodoErr(error);
    } else {
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false,
      };

      setTodos([...todos].concat(newTodo));
      setTodo("");
      setTodoErr("");
    }
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
    <div className="my-todo bg-yellow-200 w-60 md:w-96 mx-auto rounded-lg mt-16 ">
      <form
        className="text-sm md:flex justify-between items-center md:px-8 py-4 "
        onSubmit={handleSubmit}
      >
        <div className="my-input">
          <input
            className="py-2 m-4 rounded "
            type="text"
            name="todo"
            id=""
            value={todo}
            placeholder="Enter todo task"
            onChange={(e) => setTodo(e.target.value)}
          />
          {todoErr && todoErr.field_id === "todo" ? (
            <p className="text-red-600 text-center">{todoErr.message}</p>
          ) : null}
        </div>
        <div className="add-task">
          <button
            className="text-sm m-4 py-2 px-4 bg-green-300 rounded hover:bg-green-200"
            type="submit"
          >
            Add Task
          </button>
        </div>
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
