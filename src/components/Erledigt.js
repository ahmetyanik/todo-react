import React from "react";

function Erledigt({ allTodos }) {
  return (

    <div>
    <h3 className="text-light">Erledigt</h3>
    <div className="d-flex justify-content-center align-items-center flex-column">
      
      {allTodos.map((todo, index) => {
        return todo.erledigt === true ? (
          <ul key = {index} className="text-light">
            <li style={{listStyle:"none"}} className="bg-success p-1 rounded">{todo.message}</li>
          </ul>
        ) : null;
      })}
    </div>
    </div>
  );
}

export default Erledigt;
