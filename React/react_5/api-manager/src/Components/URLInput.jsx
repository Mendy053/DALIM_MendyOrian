import { useNewRequest } from "../Contexts/NewRequest";

export default function URLInput() {
    const { url, setUrl } = useNewRequest();
    return <>
        <input value={url} onChange={e => setUrl(e.target.value)} type="text" placeholder="URL" />
    </>;
}
