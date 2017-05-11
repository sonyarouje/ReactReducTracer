import React from 'react';
import Todo from './Todo';

function TodoList(props){
    const todoList = props.todos.map((todo)=>
        <Todo key={todo.id} {...todo} onClick={()=>props.onTodoClick(todo.id)} />
    );

    return(
        <ul> {todoList} </ul>
    );
}

export default TodoList