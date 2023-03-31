import React, { useState, useEffect } from 'react';
import './App.css';
//Imports components
import Form from "./component/Form";
import TodoList from "./component/TodoList";

function App() {

  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
    //use effect
    useEffect(() =>{
      filterHandler();
      saveLocalTodos();
      // console.log("hehe");
    }, [todos, status]);
  //Function
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //SAVE to LOCAL
  const saveLocalTodos = () =>{
    // if(localStorage.getItem("todos") === null){
    //   localStorage.setItem("todos", JSON.stringify([]));
    // }else{
    // }
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      // let todoLocal = localStorage.getItem("todos", JSON.stringify(todos));
      setTodos(todoLocal);
      // console.log(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1> 
        {/* {inputText} */}
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
