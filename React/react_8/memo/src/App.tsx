import { useMemo, useState } from "react";
import Header from "./components/Header";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
   const [count, setCount] = useState(0);
   const [something, setSomething] = useState(false);

   const sum = useMemo(() => {
      console.log("run");
      return numbers.reduce((base, value) => {
         return base + value;
      }, 0);
   }, [something]);

   return (
      <>
         <Header />

         <button onClick={() => setCount((c) => c + 1)}> add </button>
         {count}
         <button onClick={() => setCount((c) => c - 1)}> sub </button>

         <button onClick={() => setSomething(true)}> Click to sum </button>
      </>
   );
}

export default App;
