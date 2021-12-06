import React from "react";

function NichtErledigt({ allTodos }) {
  return (
    <div>
      <h3 className="text-light">Nicht Erledigt</h3>
      <div className="d-flex justify-content-center align-items-center flex-column flex-wrap">
        {allTodos.map((todo, index) => {
          return todo.erledigt === true ? null : (
            <ul key={index} className="text-light">
              <li
                style={{ listStyle: "none" }}
                className="bg-danger p-1 rounded"
              >
                {todo.message}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default NichtErledigt;
