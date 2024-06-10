import { useState } from "react";

function AddTodo({onNewItem}) {


 const [todoName,setTodoName]=useState();
 const [duedate,setduedate]=useState();


  const handleNameChange=(event)=>{
   setTodoName (event.target.value);
  }

  const handleDateChange=(event)=>{
   setduedate(event.target.value);
  }

  const handleAddButtonClicked=()=>{
onNewItem(todoName,duedate);
setduedate("");
setTodoName("");
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" 
          value={todoName}
          onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={duedate} onChange={handleDateChange}/>
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;