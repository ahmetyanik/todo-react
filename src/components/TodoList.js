import React, {useReducer } from "react";
import Erledigt from "./Erledigt";
import NichtErledigt from "./NichtErledigt";
import Todo from "./Todo";
import "../style/todolist.scss";



const reducer = (state,action) =>{  

    const date = new Date();
    const todoText = action.payload.text;


  const index = action.payload.index;
  const erledigtDate = action.payload.completedDate;


  console.log(erledigtDate);
  

  switch (action.type) {
    case "add":

    const todo = {
      erledigt :false,
      message : todoText,
      createdDate : date.toLocaleString(),
      completedDate : "",
    }

    const result = [...state, {...todo}]

    console.log(result);
      return result;
      
    case "toggle":
    
    const array = [];

    for(let i=0;i<state.length;i++){

      if(index===i){
      const newObject = {...state[index],erledigt:!state[index].erledigt,completedDate:erledigtDate}

      array.push(newObject);

      }else{
        array.push(state[i]);
      }
    }
     return array;

     case "delete":

     const array2 =[...state];
    
     array2.splice(index,1);

     return array2;
    
     
      
  
    default:
    return state;
  }

}

const initialTodo = [];


function TodoList() { 
 
const [state, dispatch] = useReducer(reducer, initialTodo)

console.log(state);

let inputText ="";

function eventHandler(e){

  inputText = e.target.value;  
    
}

function addButtonHandler(){
  const input = document.querySelector("input");
  
  dispatch({type:"add", payload:{text:inputText}})

  input.value = "";
}

  return (
    <div id="todolist" style={{minHeight:"88vh"}}>

        <div className="d-flex justify-content-center align-items-center pt-5 mb-2">
        <input onChange={eventHandler} />
        <button onClick={addButtonHandler}  className="btn btn-info mx-2">
          ADD
        </button>
      </div>

  <div className="d-flex justify-content-center align-items-center flex-wrap">

      {
        state.map((element,index)=>{
          return(
          <Todo key={index} element={element} index={index} dispatch={dispatch}/>
          )

        })
      }

      </div>


     

      {       

        state.length>0 ? 

      <div className="d-flex justify-content-around">
      <Erledigt state={state}/>
      <NichtErledigt state={state}/>

      </div>

      : null
      }

    </div>
  );
}

export default TodoList;
