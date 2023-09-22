import { FormEvent, useState } from "react";
import { useUrlContext } from "../context";
import { methods } from "../constants";

export default function RequestForm() {
   const [url, setUrl] = useState<string>("");
   const [method, setMethod] = useState<string>("GET");
   const [payload, setPayload] = useState<string>("");
   const [result, setResult] = useState<any[]>([]);

   const { saveUrl } = useUrlContext();

   function onSubmit(event: FormEvent) {
      event.preventDefault();

      // console.log(url);
      // console.log(method);
      // console.log(JSON.stringify(payload));

      fetch(url, {
         method: method,
         body: payload ? payload : null,
         headers: { "Content-type": "application/json; charset=UTF-8" },
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setResult(Array.isArray(data) ? [...data] : [data]);

            // setUrl("");
            // setPayload("");
         })
         .catch((error) => {
            alert(error);
         });
   }
   return (
      <>
         <form onSubmit={onSubmit}>
            <input value={url} type="text" placeholder="url..." name="url" onChange={(event) => setUrl(event.target.value)} />

            <select value={method} onChange={(event) => setMethod(event.target.value)} name="method">
               {methods.map((method) => {
                  return (
                     <option key={method} value={method}>
                        {method}
                     </option>
                  );
               })}
            </select>
            {method === "POST" || method === "PUT" ? (
               <textarea name="payload" value={payload} rows={10} cols={30} onChange={(event) => setPayload(event.target.value)} />
            ) : null}
            <button>Submit</button>
         </form>

         <div>
            {result.length > 0 && <button onClick={() => saveUrl && saveUrl(url)}>Save</button>}
            {result.length > 0 ? JSON.stringify(result) : null}
         </div>
      </>
   );
}
