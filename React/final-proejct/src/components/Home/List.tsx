import { useState } from "react";
import { TodoStatus, TodoType, changeTodoStatus, deleteTodo } from "../../state/todo/Actions/ActionsTypes";
import { useDispatch } from "react-redux";
import { MyDate } from "../../Helpers";
import { NavLink } from "react-router-dom";

type ListPropsType = {
    listName: string,
    listData: TodoType[],
    setClicked: React.Dispatch<React.SetStateAction<number | null>>
    clicked: number | null,
};

const List: React.FC<ListPropsType> = ({ listName, listData, clicked, setClicked }) => {
    const [sortByDate, setSortByDate] = useState<boolean>(true);
    const [searchTodo, setSearchTodo] = useState<string>("");
    const dispatch = useDispatch();

    const onSelect = (id: number) => {
        setClicked(clicked === id ? null : id);
    };

    const moveToPreviousStatus = (id: number, status: TodoStatus) => {
        const newStatus: TodoStatus = status === TodoStatus.process ? TodoStatus.new : (status === TodoStatus.done ? TodoStatus.process : TodoStatus.new);
        dispatch(changeTodoStatus(id, newStatus));
    }
    const moveToNextStatus = (id: number, status: TodoStatus) => {
        const newStatus: TodoStatus = status === TodoStatus.process ? TodoStatus.done : (status === TodoStatus.new ? TodoStatus.process : TodoStatus.done);
        dispatch(changeTodoStatus(id, newStatus));
    };
    const deleteSelectedTodo = (id: number) => {
        dispatch(deleteTodo(id));
    };

    const onSortChange = () => {
        setSortByDate(!sortByDate)
    }

    return (
        <div className="list">
            <div className="list-title-container">
                <h1>{listName.toUpperCase()}</h1>
                <div className="switch-container">
                    <span> Sort By Date:</span> <label className="switch">
                        <input type="checkbox" onChange={onSortChange} checked={sortByDate} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search Todo" value={searchTodo} onChange={(e) => setSearchTodo(e.target.value)} />
            </div>
            <ul>
                {listData.filter((todo) => todo.title.toLowerCase().includes(searchTodo.toLowerCase()))
                    .sort(function (a, b) {
                        if (sortByDate) {
                            if (a.expireDate < b.expireDate) { return -1; }
                            if (a.expireDate > b.expireDate) { return 1; }
                        } else {
                            if (a.title < b.title) { return -1; }
                            if (a.title > b.title) { return 1; }
                        }
                        return 0;
                    }).map(todo => {
                        return <li
                            key={todo.id}
                            id={todo.id.toString()}
                            onClick={() => onSelect(todo.id)}
                            className={clicked === todo.id ? "clicked" : ""}
                            style={{
                                borderLeftColor:
                                new Date(todo.expireDate).toDateString() === MyDate.TOMORROW.toDateString() ? "red" :
                                    new Date(todo.expireDate).toDateString() === MyDate.NEXT_TOW_DAYS.toDateString() ? "pink" :
                                            "rgb(172, 172, 172)"
                            }}
                        >
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                            <span className="todo-date">{new Date(todo.expireDate).toLocaleString("he-IL", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                            <div id="edit-and-view-todo">
                                {(todo.id === clicked) &&
                                    <div title="view" className=""><NavLink to={`/todo?todo-id=${todo.id}&view=1`}>👁</NavLink></div>
                                }
                                {(todo.status !== TodoStatus.deleted && todo.id === clicked) &&
                                    <div title="edit" className=""><NavLink to={`/todo?todo-id=${todo.id}`}>✏️</NavLink></div>
                                }
                                {(todo.status !== TodoStatus.deleted && todo.status !== TodoStatus.done && todo.id === clicked) &&
                                    <div title="move to next status" onClick={() => moveToNextStatus(todo.id, todo.status)} >{"⬅️"}</div>
                                }
                                {(todo.status !== TodoStatus.deleted && todo.status !== TodoStatus.new && todo.status !== TodoStatus.done && todo.id === clicked) &&
                                    <div title="move to previous status" onClick={() => moveToPreviousStatus(todo.id, todo.status)} >{"➡️"}</div>
                                }
                                {((todo.status === TodoStatus.done || todo.status === TodoStatus.deleted) && todo.id === clicked) &&
                                    <div title="remove" onClick={() => deleteSelectedTodo(todo.id)} >{"🗑"}</div>
                                }
                            </div>
                        </li>
                    })}
            </ul>
        </div>
    )
}

export default List;