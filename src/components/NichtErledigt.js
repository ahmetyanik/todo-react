import React from "react";

function NichtErledigt({ allTodos }) {
  return (
    <div>
    <h3>Nicht Erledigt</h3>
    <div className="d-flex justify-content-center align-items-center flex-column flex-wrap">
      
      {allTodos.map((todo, index) => {
        return todo.erledigt === true ? null : (
          <div class="card bg-dark text-light">
            <div class="card-body">{todo.message}</div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default NichtErledigt;
