import { useState } from "react";

export default function TaskForm(props) {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   function onTitleChange(event) {
      setTitle(event.target.value);
   }

   function onDescriptionChange(event) {
      setDescription(event.target.value);
   }

   function onSubmitForm(event) {
      event.preventDefault();

      const newTask = {
         id: Math.floor(Math.random() * 100000000000),
         title: title,
         completed: false,
         description: description,
      };

      props.onAddTask(newTask);

      setTitle("");
      setDescription("");
   }
   return (
      <form onSubmit={onSubmitForm}>
         <input type="text" value={title} onChange={onTitleChange} />
         <input type="text" value={description} onChange={onDescriptionChange} />

         <button>Add</button>
      </form>
   );
}
