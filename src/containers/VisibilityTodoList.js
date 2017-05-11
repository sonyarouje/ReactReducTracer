import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import TodoList from '../components/TodoList';


function getVisibleTodos(todos, filter){
    return todos.todos;
}

function mapStateToProps(state){
    console.log(state);
    return {
        todos:getVisibleTodos(state.todos, state.visibilityFilter)
    };
}

function mapDisptachToProps(dispatch){
    return {
        onTodoClick:(id)=>{
            dispatch(toggleTodo(id))
        }
    };
}

const VisibilityTodoList = connect(mapStateToProps, mapDisptachToProps)(TodoList);

export default VisibilityTodoList;