import { ACTIONS } from "../Actions/Actions";
import { AddNewTodoActionType, Todo } from "../Actions/ActionsTypes";

export type Action = AddNewTodoActionType;

export const TodoReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case (ACTIONS.ADD_NEW_TODO):
            return [...state, action.newTodo];
        default:
            return state;
    }
};