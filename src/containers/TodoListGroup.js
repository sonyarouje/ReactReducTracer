import React from 'react';
import { enhanceComponent } from 'prism';
import { connect } from 'react-redux';


const visibilityTodo = require('./VisibilityTodoList').default;
const addTodo = require('./AddTodo').default;

const officialSelector = (state)=>state.todosGroup.officialTodo;
const personalSelector = (state)=>state.todosGroup.personalTodo;

/*
    here we can see I am reffering officialTodo like state.todosGroup, not like state.officialTodo.
    It's because in reducers/index.js, I use combined reducers, there the reducer is added with key 'todosGroup'.
    If the key is different in combined reducer then that should reflect here as well.
*/

const officialWrapper = (type)=>`official.${type}`;
const personalWrapper = (type)=>`personal.${type}`;

const TodoGroup = enhanceComponent(visibilityTodo);
const AddToDoGroup = enhanceComponent(addTodo);

function TodoPair(props){
    return(
        <div>
            <span>personal</span>
            <AddToDoGroup
                selector={personalSelector}
                wrapper={personalWrapper}            
            />
            {/*you can also refer state and wrapper as shown below.*/}
            <TodoGroup
                selector={(state)=>state.todosGroup.personalTodo}
                wrapper={(type)=>`personal.${type}`}>
            </TodoGroup>

            <span>Official</span>
            <AddToDoGroup
                selector={officialSelector}
                wrapper={officialWrapper}            
            />
            <TodoGroup
                selector={officialSelector}
                wrapper={officialWrapper}>
            </TodoGroup>
        </div>
    );
}

export default connect()(TodoPair);