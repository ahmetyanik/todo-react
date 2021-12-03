import React from "react";

function Erledigt({ allTodos }) {
  return (

    <div>
    <h3>Erledigt</h3>
    <div className="d-flex justify-content-center align-items-center flex-column">
      
      {allTodos.map((todo, index) => {
        return todo.erledigt === true ? (
          <div class="card bg-success text-light">
            <div class="card-body">{todo.message}</div>
          </div>
        ) : null;
      })}
    </div>
    </div>
  );
}

export default Erledigt;
