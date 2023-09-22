import TaskItem from "./TaskItem";

export default function TaskList(props) {
   return (
      <div>
         {props.tasks.map((task, index) => {
            return (
              <TaskItem key={task.id} index={index} task={task} {...props} />
            );
         })}
      </div>
   );
}
