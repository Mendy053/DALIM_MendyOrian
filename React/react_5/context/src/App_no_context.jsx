import { useState } from "react";

function App() {
   const [counter, setCounter] = useState(0);

   return (
      <>
         <button onClick={() => setCounter((lastState) => lastState + 1)}>INCREMENT</button>
         App counter: {counter}
         <button onClick={() => setCounter((lastState) => lastState - 1)}>DECREMENT</button>
         <Parent counter={counter} />
      </>
   );
}

function Parent(props) {
   return (
      <div>
         Parent counter: {props.counter}
         <Child counter={props.counter} />
      </div>
   );
}

function Child(props) {
   return <div>Child counter: {props.counter}</div>;
}

export default App;
