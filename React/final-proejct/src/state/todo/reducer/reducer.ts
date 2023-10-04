import { ADD_NEW_TODO, CHANGE_TODO_STATUS, DELETE_TODO } from "../Actions/Actions";
import { AddNewTodoActionType, TodoStatus, TodoType, ChangeTodoStatusType, DeleteTodoType } from "../Actions/ActionsTypes";

export type Action = AddNewTodoActionType | ChangeTodoStatusType | DeleteTodoType;

const initial: TodoType[] = [
    {
        id: 21,
        title: "string",
        description: "string",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: false,
        expireDate: new Date()
    },
    {
        id: 22,
        title: "string",
        description: "string",
        dateCreated: new Date(),
        status: TodoStatus.process,
        completed: false,
        expireDate: new Date()
    },
    {
        id: 33,
        title: "string",
        description: "string",
        dateCreated: new Date(),
        status: TodoStatus.done,
        completed: false,
        expireDate: new Date()
    },
    {
        id: 11,
        title: "string",
        description: "string",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: true,
        expireDate: new Date()
    },
    {
        id: 12,
        title: "string",
        description: "string",
        dateCreated: new Date(),
        status: TodoStatus.process,
        completed: true,
        expireDate: new Date()
    },
    {
        id: 13,
        title: "string",
        description: "string",
        dateCreated: new Date(),
        status: TodoStatus.done,
        completed: true,
        expireDate: new Date()
    },
];

export const TodoReducer = (state: TodoType[] = initial, action: Action): TodoType[] => {
    switch (action.type) {
        case ADD_NEW_TODO:
            return [...state, action.payload.newTodo];
        case CHANGE_TODO_STATUS:
            return state.map((todo: TodoType) => {
                return todo.id === action.payload.id ? { ...todo, status: action.payload.newStatus } : todo;
            });
        case DELETE_TODO:
            return state.filter((todo: TodoType) => todo.id !== action.payload.id);
        default:
            return state;
    }
};