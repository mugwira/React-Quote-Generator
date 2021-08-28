import React, {useState} from 'react'
import { FaTrashAlt } from 'react-icons/fa';

function Todo() {

    const[todos, setTodos] = useState([]);
    const[todo, setTodo] = useState("");
    const[todoErr, setTodoErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo ={
            id: new Date().getTime(),
            text: todo
        }
        
        setTodos([...todos].concat(newTodo));
        setTodo("");
    }

    const handleDelete = (id) => {
       const newTodos = todos.filter((todo) => todo.id !== id);
       setTodos(newTodos);
    }
    return (
        <div className="bg-yellow-200 w-1/3 mx-auto rounded-lg ">
           <form className="flex justify-between items-center px-8 py-8" onSubmit={handleSubmit}>
               <div className="my-input">
               <input
               className="p-2 rounded"
                type="text"
                 name="todo" 
                 id="" 

                 value={todo}
                 placeholder="Enter todo task"
                 onChange={(e) => setTodo(e.target.value)}
                 />
               </div>
              <div className="my-btn">
                  
              </div>
              <button
              className="py-2 px-4 bg-green-300 rounded hover:bg-green-200"  
              type="submit">
                     Add Task
                 </button>
            </form>
            {todos.map((todo) => <div className="bg-green-100 my-4 py-4 flex justify-between px-8">
                {todo.text}
                <button className="hover:text-red-500" onClick={() =>handleDelete(todo.id)}>
                    <FaTrashAlt /></button>
                </div>)}
                
        </div>
    )
}

export default Todo
