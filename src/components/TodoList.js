import React, { useEffect, useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function createTodo() {
    const array = [];

    todos.forEach((e) => {
      array.push(e);
    });

    const input = document.querySelector("input");
    const todo = {
      erledigt: false,
      message: input.value,
    };

    if (todo.message.length > 0) {
      array.push(todo);
    }

    setTodos(array);
    input.value = "";
  }

  useEffect(() => {
    createTodo();
  }, []);


 
  return (
    <div>
      <div className="d-flex justify-content-center mt-5 mb-2">
        <input />
        <button onClick={createTodo} className="btn btn-success">
          ADD
        </button>
      </div>
      <div
        style={{ minHeight: "80vh" }}
        className="d-flex flex-wrap justify-content-center"
      >
        {todos.map((todo, index) => {
          if (todo.message.length > 0) {
            return (
              <Todo
                key={index}
                erledigt={todo.erledigt}
                message={todo.message}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default TodoList;
