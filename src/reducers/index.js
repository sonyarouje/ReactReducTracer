import { combineReducers  } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todosGroup = require('./todosGroup').default;

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    todosGroup
});

export default todoApp;