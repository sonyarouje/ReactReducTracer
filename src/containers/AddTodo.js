import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class AddToDo extends React.Component{

  constructor (props){
    super(props);
    this.state={text:''};
    this.onAdd = this.handleAdd.bind(this);
    this.onChange = this.handleTextChange.bind(this);
  }

  handleAdd(event){
    event.preventDefault();
    this.props.dispatch(addTodo(this.state.text));
    this.setState({text:''});
  }

  handleTextChange(event){
    this.setState({text:event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.onAdd}>
        <input type="text" value={this.state.text} onChange={this.onChange}/>
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

const AddTodo=connect()(AddToDo);

export default AddTodo