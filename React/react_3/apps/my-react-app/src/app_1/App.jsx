import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
   const [number, setNumber] = useState(0);
   const [numberHistory, setNumberHistory] = useState([]);
   const [inputValue, setInputValue] = useState(0);

   function something() {
      console.log("something");
   }

   function getUserNumber() {
      setNumber(inputValue);
      numberHistory.push(inputValue);
   }

   function inputValueChange(event) {
      const value = event.target.value;
      setInputValue(Number(value));
   }

   //  console.log("App Render");

   return (
      <>
         {/* <Header nameApp="App" func={something} /> */}
         {/* <Main /> */}

         <input type="number" onChange={inputValueChange} />

         {/* <p>Input value: {inputValue}</p> */}
         <p> {JSON.stringify(numberHistory)} </p>
         <div>{number}</div>
         <button style={{ color: number === 7 ? "red" : "" }} onClick={getUserNumber}>
            Show Input Number
         </button>
      </>
   );
}

export default App;

// function myUseState(initialValue) {
//    let value = initialValue;

//    function updateValue(newValue) {
//       value = newValue;
//    }

//    return [value, updateValue];
// }

// const [value, setValue] = myUseState(0);
// const [one,setone] = myUseState(0);

// console.log(value, setValue);

// const obj = { name: "Avi", age: 30 };

// obj.name;

// const { name, age } = obj;
