import { useState } from "react";
import { fetchData } from "../utils/fetchData";
import { useParams } from "react-router";

export default function TodosList() {
    const [todos, setTodos] = useState([]);
    const params = useParams();

    fetchData(`https://jsonplaceholder.typicode.com/todos${params.userId ? `?userId=${params.userId}` : ""}`).then((results) => {
        setTodos(results);
    });

    return <>
        {todos.map((todo) => {
            return <div key={todo.id}>
                <p>{todo.completed ? "🔘" : "⚪️"} &emsp; {todo.title}</p>
            </div>;
        })}
    </>;
}
