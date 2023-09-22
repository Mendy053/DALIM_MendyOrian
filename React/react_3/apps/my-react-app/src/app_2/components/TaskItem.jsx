

export default function TaskItem(props) {
    const {task,index} =props
    return (
        <div>
            <p>
                {index + 1} Title: {task.title}
            </p>
            <p>Complete: {task.completed ? "Yes" : "No"}</p>
            <input type="checkbox" onChange={(event) => props.onCompleteTask(event.target.checked, task.id)} />
            <p>Description: {task.description}</p>

            <button onClick={() => props.onDeleteTask(task.id)}>Delete</button>
        </div>
    );
}
