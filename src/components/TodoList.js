import React, { useState } from "react";
import Erledigt from "./Erledigt";
import NichtErledigt from "./NichtErledigt";
import Todo from "./Todo";
import "../style/todolist.scss";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const array = [];

  todos.forEach((todo) => {
    array.push(todo);
  });

  function changeStateFromTodoButton(data, index) {
    array[index].erledigt = data;

    setTodos(array);
  }

  function sendDeleteFunction(index) {
    array.splice(index, 1);

    setTodos(array);
  }

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


  return (
    <div id="todolist" style={{minHeight:"88vh"}}>
      <div className="d-flex justify-content-center pt-5 mb-2">
        <input />
        <button onClick={createTodo} className="btn btn-info mx-2">
          ADD
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {todos.map((todo, index) => {
          if (todo.message.length > 0) {
            return (
              <Todo
                key={index}
                erledigt={todo.erledigt}
                message={todo.message}
                indexno={index}
                onButton={changeStateFromTodoButton}
                onDelete={sendDeleteFunction}
              />
            );
          }
        })}
      </div>
      <div style={{minHeight:"30vh"}} className="container d-flex justify-content-between mt-5">


            <Erledigt allTodos = {todos}/>
            <NichtErledigt allTodos = {todos}/>

        </div>
    </div>
  );
}

export default TodoList;
