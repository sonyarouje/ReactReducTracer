import todo from './todo';

export interface TodosState {
  todos: any[]
};

export const initialState : TodosState = {
  todos: []
};

function todos(state=initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            console.log(state);
            return Object.assign({}, state,{
                todos:[
                    ...state.todos,
                    todo(undefined, action)
                ]
            });
        case 'TOGGLE_TODO':
            return Object.assign({}, state,{
                todos: state.todos.map(t=> todo(t,action))
            });
            
        default:
            return state;
    }
}

export default todos;
