import { useEffect } from "react";
import { useActions } from "../Contexts/Actions";

export default function Balance() {
    const [actions] = useActions();

    return (
        <h2>Balance: {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(actions.reduce((acc, action) => {
            return acc + action.sum;
        }, 0))}</h2>
    );
}
