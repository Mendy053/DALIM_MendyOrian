import { useState } from "react";
import { useActions } from "../Contexts/Actions";

export default function NewActionForm() {
    const [sum, setSum] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [actions, setActions] = useActions();

    function onSubmit() {
        setActions([...actions, {
            id: Date.now(),
            sum: Number(sum),
            date: date
        }]);

        setDate(new Date().toISOString().split('T')[0]);
        setSum("");
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); sum && onSubmit(); }}>
            {/* <label htmlFor="sum">Sum:</label> */}
            <input id="sum" type="number" name="sum" value={sum} onChange={e => { setSum(e.target.value); }} placeholder="Type the sum of action:" />

            {/* <label htmlFor="date">Date</label> */}
            <input type="date" name="date" onChange={e => { setDate(e.target.value); }} id="date" value={date} />

            <button>Submit</button>
        </form >
    );
}
