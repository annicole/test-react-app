import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";

const Todo = ({}) => {
  const [todos, SetTodos] = useState([
    { id: 1, task: "Estudiar", completed: false },
  ]);
  const todoTaskRef = useRef();
  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;

    if (task === "") return;
    SetTodos((previous) => {
      return [...previous, { id: Math.random(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const arrayCopy = [...todos];
    const tod = arrayCopy.find((todo) => todo.id == id);
    tod.completed = !tod.completed;
    SetTodos(arrayCopy);
  };

  const handleClearAll = () => {
    const newArray = todos.filter((x) => !x.completed);
    SetTodos(newArray);
  };

  useEffect(() => {
    localStorage.setItem("todosApp.todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todosApp.todos"));
    if (stored) {
      SetTodos(stored);
    }
  }, []);

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
      <button onClick={handleTodoAdd} className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"> +</button>
      <button> - </button>
      <div className="text-3xl font-bold underline">
        Te quedan {todos.filter((x) => !x.completed).length} tareas por terminar{" "}
      </div>
    </>
  );
};

export default Todo;
