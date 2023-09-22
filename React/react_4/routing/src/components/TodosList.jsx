import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function TodosList() {
    const [todos, setTodos] = useState([]);
    const [params] =  useSearchParams()

    useEffect(() => {
        fetchData(`https://jsonplaceholder.typicode.com/todos${params.get("userId") ? `?userId=${params.get("userId")}` : ""}`).then((results) => {
            setTodos(results);
        });
    }, []);

    return <>
        {todos.map((todo) => {
            return <div key={todo.id}>
                <p>{todo.completed ? "🔘" : "⚪️"} &emsp; {todo.title}</p>
            </div>;
        })}
    </>;
}
