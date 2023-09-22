import { Dispatch, SetStateAction } from "react";
import { useNewRequest } from "../../contexts/NewRequest";

const methods: string[] = ["GET", "POST", "PUT", "DELETE"];

export default function Method() {
    const { method, setMethod }: { method: string, setMethod: Dispatch<SetStateAction<string>>; } = useNewRequest();

    return (
        <>
            <select value={method} onChange={e => { setMethod(e.target.value); }} name="method" id="method">
                <option value="" disabled>select method:</option>;
                {
                    methods.map(methodBlank => {
                        return <option key={methodBlank} value={methodBlank}>{methodBlank}</option>;
                    })
                }
            </select>
        </>
    );
}
