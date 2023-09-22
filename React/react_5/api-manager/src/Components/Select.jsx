import { useNewRequest } from "../Contexts/NewRequest";

export default function Select() {
    const { method, setMethod } = useNewRequest();
    return <>
        <select value={method} onChange={e => setMethod(e.target.value)} name="method" id="method">
            <option value="" disabled>Select method</option>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
        </select>
    </>;
}
