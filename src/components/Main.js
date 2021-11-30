import React, { useEffect, useState } from 'react'

function Main() {

    let todos;

    const [allTodos,setAllToDos] = useState()
    
    
    function getTodos(){  

        
        if(localStorage.todos){
            
            todos = JSON.parse(localStorage.todos);
          
            setAllToDos(todos);
        }else{
                       
            todos = [];
            setAllToDos(todos)
        }
    }
    
  

    

    useEffect(()=>{
        getTodos();
    },[])
    

    
    function getInputValue(){
        
        const input = document.querySelector("#input");
        const value = input.value;        

        
        setAllToDos(value);

    }
    
    console.log(allTodos);
    
 

    return (
        <div className="d-flex justify-content-center mt-5">

        <input id="input" placeholder="Write your todo"/>
        <button onClick={getInputValue} className="btn btn-success">ADD YOUR TODO</button>
        </div>
    )
}

export default Main
