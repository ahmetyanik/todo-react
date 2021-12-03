import React from "react";

function Todo({ erledigt, message, onButton, indexno, onDelete }) {
  function sendtoTodoList(e) {
    const index = parseInt(e.target.getAttribute("indexno"));

    onButton(!erledigt, index);
  }

  function deleteItem(e) {
    const index = parseInt(e.target.getAttribute("indexno"));

    onDelete(index);
  }

  return (
    <div className="m-2">
      <div className="card">
        <h5
          className={`card-header text-light ${
            erledigt ? "bg-success" : "bg-danger"
          }`}
        >
          {erledigt ? "Erledigt" : "Noch nicht Erledigt"}
        </h5>
        <div className="card-body ">
          <div className="d-flex justify-content-center">
            <p className="card-text">
              {indexno + 1}- {message}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={sendtoTodoList}
              indexno={indexno}
              id="erledigt"
              className={`btn btn-primary text-light ${
                erledigt ? "bg-danger" : "bg-success"
              }`}
            >
              {erledigt ? "Nicht Erledigt" : "✔"}
            </button>

            <button
              onClick={deleteItem}
              indexno={indexno}
              className="btn btn-dark ms-1"
            >
              🗑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
