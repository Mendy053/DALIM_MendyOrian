import { Dispatch, SetStateAction } from "react";
import { useNewRequest } from "../../contexts/NewRequest";

export default function Body() {
  const { method, body, setBody }: { method: string, body: string, setBody: Dispatch<SetStateAction<string>>; } = useNewRequest();

  return (
    <>
      {
        (method === "POST" || method === "PUT") ?
          <>
            <textarea value={body} onChange={e => setBody(e.target.value)} name="body" id="body" placeholder="Body"></textarea>
          </>
          : ""
      }
    </>
  );
}
