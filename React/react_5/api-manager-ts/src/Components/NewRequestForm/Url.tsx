import { Dispatch, SetStateAction } from "react";
import { useNewRequest } from "../../contexts/NewRequest";

export default function Url() {
    const { url, setUrl }: { url: string, setUrl: Dispatch<SetStateAction<string>>; } = useNewRequest();
    

    return (
        <>
            <input type="text" id="url" placeholder="Url" name="url" value={url} onChange={e => setUrl(e.target.value)} />
        </>
    );
}
