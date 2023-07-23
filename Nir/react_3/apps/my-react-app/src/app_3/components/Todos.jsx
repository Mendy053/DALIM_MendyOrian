function Todo(props) {
    return <div>
        <span>{props.completed ? "V" : "X"}  :  </span>
        <span>{props.title}</span>
    </div>;
}
export default function Todos(props) {
    return props.todos.map((todo) => {
        return <Todo key={todo.id} completed={todo.completed} title={todo.title}></Todo>;
    });
}
