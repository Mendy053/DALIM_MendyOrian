import { useContext } from "react";
import { CounterContext } from "./context";

function App() {
   const { counter, decrement, increment } = useContext(CounterContext);

   return (
      <>
         <button onClick={() => increment(1)}>INCREMENT</button>
         App counter: {counter}
         <button onClick={() => decrement(1)}>DECREMENT</button>
         <Parent />
      </>
   );
}

function Parent() {
   return (
      <div>
         Parent counter:
         <Child />
      </div>
   );
}

function Child() {
   const { counter } = useContext(CounterContext);

   return (
      <>
         <div>Child counter:{counter} </div>;
      </>
   );
}

export default App;
