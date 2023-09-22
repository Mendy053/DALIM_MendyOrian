const REACT_ELEMENT = React.createElement;

function TaskItem(props) {
   // console.log(props)
   return REACT_ELEMENT("li", {}, [
      REACT_ELEMENT("button", { key: randomId(), onClick: () => props.deleteTask(props.id) }, "X"),
      REACT_ELEMENT("p", { key: randomId() }, props.title),
   ]);
}

class App extends React.Component {
   constructor(props) {
      super();

      this.state = {
         tasks: [
            { id: randomId(), title: "Run" },
            { id: randomId(), title: "Eat" },
         ],
      };

      this.deleteTask = this.deleteTask.bind(this);
   }

   addTask(taskTitle) {
      const newTask = {
         id: randomId(),
         title: taskTitle,
      };

      this.setState((prev) => {
         return {
            tasks: [...prev.tasks, newTask],
         };
      });
   }

   deleteTask(id) {
      console.log(this);
      this.setState((prev) => {
         return {
            tasks: prev.tasks.filter((task) => task.id !== id),
         };
      });
   }

   render() {
      return REACT_ELEMENT("div", {}, [
         REACT_ELEMENT("button", { key: randomId(), onClick: () => this.addTask("New Task") }, "Click me"),

         REACT_ELEMENT(
            "ul",
            { key: randomId(), className: "task_list" },
            this.state.tasks.map((task) => {
               return REACT_ELEMENT(
                  TaskItem,
                  {
                     key: randomId(),
                     title: task.title,
                     id: task.id,
                     deleteTask: this.deleteTask,
                  },
                  null
               );
            })
         ),
      ]);
   }
}

ReactDOM.createRoot(document.querySelector("#root")).render(REACT_ELEMENT(App, { name: "Avi" }, null));

function randomId() {
   return Math.floor(Math.random() * 1000000000);
}
