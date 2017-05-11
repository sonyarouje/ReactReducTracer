import { buildUnwrapper, buildReducer } from 'prism';
// import todos from './todos';
import {TodoState,initialState } from './todos';
const todosReducer = require('./todos').default;

export interface TodosGroupState {
  officialTodo: {todos:TodoState},
  personalTodo: {todos:TodoState}
};

export const initState={
    officialTodo:{todos:initialState},
    personalTodo:{todos:initialState}
}

console.log(initState);

export default buildReducer([{
    unwrapper: buildUnwrapper('official'),
    handler: function(state, action){
        return{
            ...state,
            officialTodo:{todos:todosReducer(state.officialTodo.todos, action)}
        };
    }
},{
    unwrapper: buildUnwrapper('personal'),
    handler: (state,action)=>({
        ...state,
        personalTodo:{todos:todosReducer(state.personalTodo.todos,action)}
    })
}], initState);


