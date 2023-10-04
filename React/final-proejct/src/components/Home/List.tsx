import { useState } from "react";
import { TodoStatus, TodoType, changeTodoStatus, deleteTodo } from "../../state/todo/Actions/ActionsTypes";
import { useDispatch } from "react-redux";

type ListPropsType = {
    listName: string,
    listData: TodoType[];
};
const List: React.FC<ListPropsType> = ({ listName, listData }) => {
    const [clicked, setClicked] = useState<number | null>(null);
    const dispatch = useDispatch();

    const onSelect = (id: number) => {
        setClicked(clicked === id ? null : id);
    };

    const moveToPreviousStatus = (id: number, status: TodoStatus) => {
        const newStatus: TodoStatus = status === TodoStatus.process ? TodoStatus.new : (status === TodoStatus.done ? TodoStatus.process : TodoStatus.new);
        dispatch(changeTodoStatus(id, newStatus));
    };
    const moveToNextStatus = (id: number, status: TodoStatus) => {
        const newStatus: TodoStatus = status === TodoStatus.process ? TodoStatus.done : (status === TodoStatus.new ? TodoStatus.process : TodoStatus.done);
        dispatch(changeTodoStatus(id, newStatus));
    };
    const deleteSelectedTodo = (id: number) => {
        dispatch(deleteTodo(id))
    };

    return (
        <div className="list">
            <h1>{listName.toUpperCase()}</h1>
            <ul>
                {listData.map(todo => {
                    return <li
                        key={todo.id}
                        id={todo.id.toString()}
                        onClick={() => onSelect(todo.id)}
                        className={clicked === todo.id ? "clicked" : ""}
                    >
                        <span>{todo.title}</span>
                        <div className="move-buttons-area">

                            {(todo.status !== TodoStatus.new && todo.id === clicked) &&
                                <div title="move to previous status" onClick={() => moveToPreviousStatus(todo.id, todo.status)} className="move-todo-button">{"<"}</div>
                            }
                            {(todo.status !== TodoStatus.done && todo.id === clicked) &&
                                <div title="move to next status" onClick={() => moveToNextStatus(todo.id, todo.status)} className="move-todo-button">{">"}</div>
                            }
                            {(todo.status === TodoStatus.done && todo.id === clicked) &&
                                <div title="remove" onClick={() => deleteSelectedTodo(todo.id)} className="move-todo-button">{"ⓧ"}</div>
                            }
                        </div>
                    </li>;
                })}
            </ul>
        </div>
    );
};

export default List;