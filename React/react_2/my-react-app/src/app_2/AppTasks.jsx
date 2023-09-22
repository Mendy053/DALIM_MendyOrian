import { useState } from "react";

export default function AppTasks() {
   const [titleValue, setTitleValue] = useState(""); // State variable to hold the value of the input field
   const [descriptionValue, setDescriptionValue] = useState(""); // State variable to hold the value of the input field
   const [tasks, setTasks] = useState([]); // State variable to hold the list of tasks

   function onInputChange(event) {
      setTitleValue(event.target.value); // Updates the inputValue state with the new value from the input field
   }
   function onDescriptionChange(event) {
      setDescriptionValue(event.target.value); // Updates the inputValue state with the new value from the input field
   }

   function onSubmitForm(event) {
      event.preventDefault(); // Prevents the default form submission behavior

      const newTask = {
         id: Math.floor(Math.random() * 100000000000), // Generates a random ID for the new task
         title: titleValue, // Uses the current value of the input field as the title of the new task
         description: descriptionValue,
         completed: false, // Sets the completed status of the new task to false
      };

      tasks.push(newTask); // Adds the new task to the tasks array (mutates the array, not recommended)

      setTasks([...tasks]); // Updates the tasks state by creating a new array with the updated tasks
      setTitleValue(""); // Resets the input field value to an empty string
      setDescriptionValue("");
   }


   function deleteTask(id) {
      const index = tasks.findIndex(task => task.id === id);
      if (index !== -1) {
         const newArr = [...tasks]; // Create a shallow copy of the tasks array
         newArr.splice(index, 1); // Remove the task at the found index
         console.log(newArr);
         setTasks(newArr);
      }
   }


   return (
      <div>
         <form onSubmit={onSubmitForm}>
            <div>
               <input type="text" placeholder="Title:" value={titleValue} onChange={onInputChange} /> {/* Input field for adding task */}
            </div>
            <div>
               <textarea placeholder="Description:" rows="3" value={descriptionValue} onChange={onDescriptionChange} ></textarea>
            </div>
            <div>
               <button>Add</button> {/* Button to submit the form */}
            </div>
         </form>

         <div>
            {tasks.map((task, index) => {
               return (
                  <div key={task.id}>
                     <h3>
                        {task.title} {/* Displays the task index and title */}
                     </h3>
                     <p>{task.description}</p>
                     <p>{task.completed}</p> {/* Displays the completion status of the task */}
                     <button onClick={() => deleteTask(task.id)} style={{ color: "red" }}>X</button>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
