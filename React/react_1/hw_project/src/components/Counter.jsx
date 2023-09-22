import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    function addToCounter(){
        setCounter(counter +1)
    }

    return <>
        <button onClick={addToCounter}>ADD</button>
        <div>{counter}</div>
    </>;

}
