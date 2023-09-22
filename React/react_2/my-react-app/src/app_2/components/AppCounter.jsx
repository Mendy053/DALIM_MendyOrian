import { useState } from "react";

export default function AppCounter() {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState("black");

    function counterChange(operator) {
        let newNumber = counter;
        switch (operator) {
            case "+":
                newNumber++;
                break;
            case "-":
                newNumber--;
                break;
            case "0":
                newNumber = 0;
                break;
        }

        setColor(newNumber > 0 ? "green" : newNumber < 0 ? "red" : "black");
        setCounter(newNumber);

    }
    return (<>
        <div style={{ color: color }}>{counter}</div>
        <button onClick={() => counterChange("+")}>+</button>
        <button onClick={() => counterChange("0")}>0</button>
        <button onClick={() => counterChange("-")}>-</button>
    </>
    );
}
