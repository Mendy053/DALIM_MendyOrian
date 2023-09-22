export default function TaskList(props) {
   return (
      <div>
         {props.tasks.map((task, index) => {
            return (
               <div key={task.id}>
                  <p>
                     {index + 1} Title: {task.title}
                  </p>
                  <p>Complete: {task.completed ? "Yes" : "No"}</p>
                  <input type="checkbox" onChange={(event) => props.onCompleteTask(event.target.checked, task.id)} />
                  <p>Description: {task.description}</p>

                  <button onClick={() => props.onDeleteTask(task.id)}>Delete</button>
               </div>
            );
         })}
      </div>
   );
}
