import React from "react";

function Todo(props) {



  return (
    <div className= "m-2">
      <div className="card">
        <h5 className={`card-header text-light ${props.erledigt ? "bg-success" : "bg-danger"}`}>{props.erledigt ? "Erledigt" : "Noch nicht Erledigt"}</h5>
        <div className="card-body">
          <p className="card-text">
            {props.message}
          </p>
          <a id="erledigt" href="#" className={`btn btn-primary text-light ${props.erledigt ? "bg-danger" :"bg-success"}`}>
          {props.erledigt ? null :"Erledigt"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Todo;
