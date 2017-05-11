import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Todo from './components/Todo';
import AddTodo from './containers/AddTodo';
import VisibilityTodoList from './containers/VisibilityTodoList';
import TodoPair from './containers/TodoListGroup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <span>General todo</span>
        <AddTodo></AddTodo>
        
        <VisibilityTodoList></VisibilityTodoList>
        <TodoPair></TodoPair>
      </div>
    );
  }
}

export default App;
