export const initState={
    id:0,
    text:'',
    completed:false
};

function todo(state=initState, action){
    switch(action.type){
        case "ADD_TODO":
            return{
                id:action.id,
                text:action.text,
                completed:false
            };
        case "TOGGLE_TODO":
            if(state.id!==action.id){
                return state;
            }

            return Object.assign({}, state,{
                completed:!state.completed
            });

        default:
            return state;
    }
};


export default todo;
