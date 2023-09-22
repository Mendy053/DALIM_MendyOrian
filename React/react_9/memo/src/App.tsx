import { useMemo, useState, useCallback } from "react";
import Header from "./components/Header";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
   const [count, setCount] = useState(0);
   const [something, setSomething] = useState(false);

   const names = useMemo(() => {
      console.log("usememo names run");
      return ["a", "b", "c"];
   }, []);

   const sum = useMemo(() => {
      console.log("usememo run");
      return numbers.reduce((base, value) => {
         return base + value;
      }, 0);
   }, [something]);

   const fn = useCallback(() => {
      console.log("fn");
   }, [count]);

   // function fn() {
   //    console.log("fn");
   // }

   return (
      <>
         <Header fn={fn} />

         <button onClick={() => setCount((c) => c + 1)}> add </button>
         {count}
         <button onClick={() => setCount((c) => c - 1)}> sub </button>

         <button onClick={() => setSomething((prev) => !prev)}> Click to sum </button>
      </>
   );
}

export default App;
