import { MyDate } from "../../../Helpers";
import { ADD_NEW_TODO, CHANGE_TODO_STATUS, DELETE_TODO, EDIT_TODO } from "../Actions/Actions";
import { AddNewTodoActionType, TodoStatus, TodoType, ChangeTodoStatusType, DeleteTodoType, EditTodo } from "../Actions/ActionsTypes";

const IsDataFromLocalStorage = true

export type Action = AddNewTodoActionType | ChangeTodoStatusType | DeleteTodoType | EditTodo;

const initial: TodoType[] = [
    {
        id: 1,
        title: "Write a note to my boss",
        description: "Compose a polite email to discuss project updates.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: false,
        expireDate: new Date("2023-10-31"),
    },
    {
        id: 2,
        title: "Plan weekend trip",
        description: "Research and plan a weekend getaway to the mountains.",
        dateCreated: new Date(),
        status: TodoStatus.process,
        completed: false,
        expireDate: new Date(),
    },
    {
        id: 3,
        title: "Grocery shopping",
        description: "Make a list of items and go grocery shopping for the week.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: true,
        expireDate: new Date("2023-10-25"),
    },
    {
        id: 4,
        title: "Finish work presentation",
        description: "Put together the final slides and notes for the presentation.",
        dateCreated: new Date(),
        status: TodoStatus.done,
        completed: true,
        expireDate: new Date("2023-11-10"),
    },
    {
        id: 5,
        title: "Exercise and yoga",
        description: "Go for a run and do a yoga session in the evening.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: false,
        expireDate: new Date(),
    },
    {
        id: 6,
        title: "Read a new book",
        description: "Start reading 'The Great Gatsby' by F. Scott Fitzgerald.",
        dateCreated: new Date(),
        status: TodoStatus.process,
        completed: false,
        expireDate: MyDate.NEXT_TOW_DAYS,
    },
    {
        id: 7,
        title: "Bake cookies",
        description: "Bake a batch of chocolate chip cookies for the family.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: false,
        expireDate: new Date("2023-10-29"),
    },
    {
        id: 8,
        title: "Paint the living room",
        description: "Choose a new color and start painting the living room walls.",
        dateCreated: new Date(),
        status: TodoStatus.process,
        completed: false,
        expireDate: new Date("2023-11-20"),
    },
    {
        id: 9,
        title: "Learn a new language",
        description: "Begin learning Spanish using online courses.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: true,
        expireDate: new Date("2023-11-15"),
    },
    {
        id: 10,
        title: "Volunteer at the shelter",
        description: "Spend the afternoon volunteering at the local animal shelter.",
        dateCreated: new Date(),
        status: TodoStatus.done,
        completed: true,
        expireDate: new Date("2023-11-30"),
    },
    {
        id: 11,
        title: "Create a budget",
        description: "Plan a monthly budget and track expenses.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: false,
        expireDate: new Date("2023-12-15"),
    },
    {
        id: 12,
        title: "Visit the art gallery",
        description: "Explore the new art exhibition at the local gallery.",
        dateCreated: new Date(),
        status: TodoStatus.process,
        completed: false,
        expireDate: MyDate.TOMORROW,
    },
    {
        id: 13,
        title: "Plant flowers in the garden",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi id repellendus sed iusto odio, fugit est repellat veniam ut atque, reiciendis voluptas! Inventore officiis necessitatibus tempora sed cum dignissimos.           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi id repellendus sed iusto odio, fugit est repellat veniam ut atque, reiciendis voluptas! Inventore officiis necessitatibus tempora sed cum dignissimos.            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi id repellendus sed iusto odio, fugit est repellat veniam ut atque, reiciendis voluptas! Inventore officiis necessitatibus tempora sed cum dignissimos.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: false,
        expireDate: new Date("2023-12-25"),
    },
    {
        id: 14,
        title: "Write a journal entry",
        description: "Reflect on the day and write in the journal before bed.",
        dateCreated: new Date(),
        status: TodoStatus.process,
        completed: false,
        expireDate: new Date("2023-12-20"),
    },
    {
        id: 15,
        title: "Organize the home office",
        description: "Sort and declutter the home office for better productivity.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: true,
        expireDate: new Date("2023-12-31"),
    },
    {
        id: 16,
        title: "Try a new recipe",
        description: "Experiment with a new recipe for dinner tonight.",
        dateCreated: new Date(),
        status: TodoStatus.process,
        completed: true,
        expireDate: new Date("2024-01-10"),
    },
    {
        id: 17,
        title: "Attend a networking event",
        description: "Participate in a local business networking event this evening.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: false,
        expireDate: new Date("2024-01-20"),
    },
    {
        id: 18,
        title: "Take a photography class",
        description: "Enroll in a beginner's photography class at the community center.",
        dateCreated: new Date(),
        status: TodoStatus.done,
        completed: true,
        expireDate: new Date("2024-01-25"),
    },
    {
        id: 19,
        title: "Plan a family picnic",
        description: "Organize a fun picnic day for the family at the park.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: false,
        expireDate: new Date("2024-02-05"),
    },
    {
        id: 20,
        title: "Explore a new hiking trail",
        description: "Discover and hike a new trail in the nearby nature reserve.",
        dateCreated: new Date(),
        status: TodoStatus.process,
        completed: false,
        expireDate: new Date("2024-02-15"),
    },
    {
        id: 21,
        title: "Plan a surprise party",
        description: "Organize a surprise birthday party for a friend.",
        dateCreated: new Date(),
        status: TodoStatus.new,
        completed: false,
        expireDate: new Date("2024-02-28"),
    }
];

const getInitialTodos = (): TodoType[] => {
    if (IsDataFromLocalStorage) {
        const todos = localStorage.getItem("todos");

        if (todos) {
            return JSON.parse(todos)
        } else {
            const empty: TodoType[] = []
            localStorage.setItem("todos", JSON.stringify(empty))
            return empty
        }
    } else {
        return initial
    }
}

const updateTodosInLS = (todos: TodoType[]) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

export const TodoReducer = (state: TodoType[] = getInitialTodos(), action: Action): TodoType[] => {
    switch (action.type) {
        case ADD_NEW_TODO:
            state = [...state, action.payload.newTodo];
            updateTodosInLS(state)
            return state;

        case CHANGE_TODO_STATUS:
            state = state.map((todo: TodoType) => {
                return todo.id === action.payload.id ? { ...todo, status: action.payload.newStatus } : todo;
            });
            updateTodosInLS(state)
            return state;

        case DELETE_TODO:
            if (state.filter(todo => todo.id == action.payload.id)[0].status === TodoStatus.deleted) {
                return state.filter(todo => todo.id !== action.payload.id)
            } else {
                return state.map((todo: TodoType) => {
                    return todo.id === action.payload.id ? { ...todo, status: TodoStatus.deleted } : todo;
                });
            }
        case EDIT_TODO:
            state = state.map((todo: TodoType) => {
                return todo.id === action.payload.todo.id ? { ...action.payload.todo } : todo;
            })
            updateTodosInLS(state)
            return state

        default:
            return state;
    }
};