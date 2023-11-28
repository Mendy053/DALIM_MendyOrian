import { ADD_NEW_TODO, CHANGE_TODO_STATUS, DELETE_TODO, EDIT_TODO } from "./Actions";
export enum TodoStatus {
    new = "new",
    process = "process",
    done = "done",
    deleted = "deleted"
}

export interface TodoType {
    id: number,
    title: string,
    description: string,
    dateCreated: Date,
    status: TodoStatus,
    completed: boolean,
    expireDate: Date;
}

export interface AddNewTodoActionType {
    type: typeof ADD_NEW_TODO,
    payload: {
        newTodo: TodoType
    };
}

export interface ChangeTodoStatusType {
    type: typeof CHANGE_TODO_STATUS,
    payload: {
        id: number,
        newStatus: TodoStatus
    };
}

export interface DeleteTodoType {
    type: typeof DELETE_TODO,
    payload: {
        id: number,
    };
}

export interface EditTodo {
    type: typeof EDIT_TODO,
    payload: {
        todo: TodoType
    }
}

export const addNewTodo = (newTodo: TodoType): AddNewTodoActionType => {
    return {
        type: ADD_NEW_TODO,
        payload: {
            newTodo: newTodo
        }
    };
};

export const changeTodoStatus = (id: number, newStatus: TodoStatus): ChangeTodoStatusType => {
    return {
        type: CHANGE_TODO_STATUS,
        payload: {
            id: id,
            newStatus: newStatus
        }
    };
};

export const deleteTodo = (id: number): DeleteTodoType => {
    return {
        type: DELETE_TODO,
        payload: {
            id: id,
        }
    };
};

export const editTodo = (todo: TodoType): EditTodo => {
    return {
        type: EDIT_TODO,
        payload: {
            todo: todo
        }
    };
};

export default {
    addNewTodo: addNewTodo,
    changeTodoStatus: changeTodoStatus,
    deleteTodo: deleteTodo,
    editTodo: editTodo
};