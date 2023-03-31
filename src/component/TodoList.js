import React from "react";
//import Component
import Todo from "./Todo"

const TodoList = ({todos, setTodos, filteredTodos}) =>{
    // console.log(filteredTodos);
    return(
<div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} id={todo.id}/>
        ))}
        {/* <Todo/>
        <Todo/>
        <Todo/>
        <Todo/> */}
      </ul>
</div>
    );
};

export default TodoList;