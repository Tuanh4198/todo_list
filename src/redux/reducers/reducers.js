import * as actions from '../actions/actions';
import { todos } from '../state/state';

export const reducer = (state = todos, action) => {
    let newTodos;
    
    switch (action.type) {
        case actions.ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;

        case actions.DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;

        case actions.UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i=0; i< newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }
            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos
            }
            return state

        default:
            return state
    }
}