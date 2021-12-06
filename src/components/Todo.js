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
      <div className="card" style={{minWidth:"300px"}}>
        <h5
          className={`card-header text-light ${
            erledigt ? "bg-success" : "bg-danger"
          }`}
        >
          {erledigt ? "Erledigt" : "Noch nicht Erledigt"}
        </h5>
        <div className="card-body ">
          <div className="d-flex justify-content-center">
            <p className="card-text text-wrap">
              {indexno + 1}- {message}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <button
              onClick={sendtoTodoList}
              indexno={indexno}
              id="erledigt"
              className={`d-flex justify-content-around btn btn-primary text-light  ${
                erledigt ? "bg-light" : "bg-success"
              }`}
            >
              {erledigt ? "❌" : "✔"}
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
