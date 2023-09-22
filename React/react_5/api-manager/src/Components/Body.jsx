import { useNewRequest } from "../Contexts/NewRequest";

export default function Body() {
    const { body, setBody, method } = useNewRequest();
    return <>
        {(method == "PUT" || method == "POST") ?
            <>
                <textarea name="body" id="body" onChange={e => setBody(e.target.value)} value={body} placeholder="Body" ></textarea>
            </>
            : <></>
        }
    </>;
}
