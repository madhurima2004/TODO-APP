import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WlcomeMsg from "./components/WlcomeMsg";
import TodoItem from "./components/TodoItem";

function App() {
  // const initialtodoItems = [
  //   {
  //     name: "Morning Walk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Study",
  //     dueDate: "right now",
  //   },
  // ];

  const [todoItems,setTodoItems] =useState([]);

  const handleNewItem = (itemName,itemDueDate)=>{
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [...todoItems, {
      name:itemName,
      dueDate: itemDueDate
    },];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem =(todoItemname)=>{
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemname);
    setTodoItems(newTodoItems);
    console.log(`item deleted:${todoItemname}`);
  }
  

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem ={handleNewItem}/>
     <WlcomeMsg todoItems={todoItems}></WlcomeMsg>
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;