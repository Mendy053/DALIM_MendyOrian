import React, { useEffect, useRef, useState } from "react"
import { connect, useDispatch } from "react-redux";
import { TodoStatus, TodoType, addNewTodo, editTodo } from "../state/todo/Actions/ActionsTypes";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../state";

interface TodoPropsType {
    Todos: TodoType[]
}

const Todo: React.FC<TodoPropsType> = ({ Todos }) => {
    const [params] = useSearchParams();
    const [id] = useState<number | undefined>(
        params.get("todo-id") ? Number.parseInt(params.get("todo-id")!) : undefined
    );
    const view = params.get("view") ? true : false;
    const getDefaultDateTime = (): Date => new Date(Date.now() + 60 * 60 * 1000);

    const dispatch = useDispatch();
    const TitleElement = useRef<HTMLInputElement | null>(null)
    const [title, setTitle] = useState<string>(id ? Todos.filter(todo => todo.id == id)[0].title : "")
    const [description, setDescription] = useState<string>(id ? Todos.filter(todo => todo.id == id)[0].description : "")
    const [expDate, setExpDate] = useState<Date>(id ? new Date(Todos.filter(todo => todo.id == id)[0].expireDate) : getDefaultDateTime())

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDateTime = new Date(event.target.value);
        setExpDate(selectedDateTime);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!id && title) {
            dispatch(addNewTodo({
                id: Date.now(),
                title: title,
                description: description,
                completed: false,
                status: TodoStatus.new,
                expireDate: new Date(expDate),
                dateCreated: new Date()
            }))
            setTitle("")
            setDescription("")
            setExpDate(getDefaultDateTime())
            alert("added!")
        }
        if (id) {
            dispatch(editTodo({
                id: id,
                title: title,
                description: description,
                completed: Todos.filter(todo => todo.id == id)[0].completed,
                status: Todos.filter(todo => todo.id == id)[0].status,
                expireDate: new Date(expDate),
                dateCreated: Todos.filter(todo => todo.id == id)[0].dateCreated
            }))
            alert("updated!")
        }
    }

    useEffect(() => { TitleElement.current?.focus() }, [])

    return (
        <>{view ?
            <div className="view-todo">
                🔘 <i><span style={{ fontSize: "1rem" }}>{Todos.filter(todo => todo.id === id)[0].status}</span></i>
                <h1>{Todos.filter(todo => todo.id === id)[0].title}</h1>
                <p>{Todos.filter(todo => todo.id === id)[0].description}</p>
                <span>{new Date(Todos.filter(todo => todo.id === id)[0].expireDate).toLocaleString("he-IL", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            :
            <>
                <h1>NEW TODO</h1>
                <form id="new-todo-form" onSubmit={onSubmit}>
                    <label htmlFor="title">Title</label>
                    <input ref={TitleElement} type="text" name="title" id="title" placeholder="Title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" placeholder="Description" value={description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} />
                    <label htmlFor="expire-date">Expire Date</label>
                    <input type="datetime-local" id="expire-date" name="expire-date" value={expDate.toISOString().slice(0, 16)} min={new Date().toISOString().slice(0, 16)} onChange={handleDateChange} />
                    <button>{id ? "UPDATE" : "Add"}</button>
                </form>
            </>
        }
        </>
    )
}

export const TodoConnected = connect((state: RootState) => ({ Todos: state.todos }))(Todo)