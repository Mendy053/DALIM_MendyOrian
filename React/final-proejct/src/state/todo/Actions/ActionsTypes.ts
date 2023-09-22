import { ACTIONS } from "./Actions";

export interface Todo {
    id: number,
    title: string,
    description: string,
    dateCreated: Date,
    status: "new" | "process" | "done",
    completed: boolean,
    expireDate: Date;
}

export interface AddNewTodoActionType {
    type: string,
    newTodo: Todo;
}

const addNewTodo = (newTodo: Todo): AddNewTodoActionType => {
    return {
        type: ACTIONS.ADD_NEW_TODO,
        newTodo: newTodo
    };
};

export default {
    addNewTodo: addNewTodo
};