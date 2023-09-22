import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider(props) {
   const [counter, setCounter] = useState(0);

   function increment(value) {
      setCounter((lastState) => lastState + value);
   }

   function decrement(value) {
      setCounter((lastState) => lastState - value);
   }

   return (
      <CounterContext.Provider value={{ counter: counter, increment: increment, decrement: decrement }}>{props.children}</CounterContext.Provider>
   );
}
