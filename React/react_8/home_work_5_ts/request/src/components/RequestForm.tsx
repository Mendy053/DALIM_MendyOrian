import { FormEvent, useState } from "react";
import { useUrlContext } from "../context";
import { methods } from "../constants";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

export default function RequestForm() {
   const [url, setUrl] = useState<string>("");
   const [method, setMethod] = useState<string>("GET");
   const [payload, setPayload] = useState<string>("");
   const [result, setResult] = useState<any[]>([]);

   const [isLoading, setIsLoading] = useState(false);

   const { saveUrl } = useUrlContext();

   function onSubmit(event: FormEvent) {
      event.preventDefault();
      setIsLoading(true);

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
         })
         .catch((error) => {
            alert(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }
   return (
      <>
         <Box
            sx={{
               width: 300,
               height: 300,
               paddingX: 10,
               paddingY: 10,
            }}
         >
            <form onSubmit={onSubmit}>
               <TextField name="url" onChange={(event) => setUrl(event.target.value)} label="Url"></TextField>

               <TextField name="method" onChange={(event) => setMethod(event.target.value)} select label="Method" defaultValue="GET">
                  {methods.map((method) => {
                     return (
                        <MenuItem key={method} value={method}>
                           {method}
                        </MenuItem>
                     );
                  })}
               </TextField>

               {method === "POST" || method === "PUT" ? (
                  <textarea name="payload" value={payload} rows={10} cols={30} onChange={(event) => setPayload(event.target.value)} />
               ) : null}

               <Button type="submit" variant="contained" disabled={isLoading || !url}>
                  Submit
               </Button>
            </form>
         </Box>

         <div>
            {result.length > 0 && (
               <Button onClick={() => saveUrl && saveUrl(url)} variant="outlined">
                  Save
               </Button>
            )}
            {result.length > 0 ? JSON.stringify(result) : null}
         </div>
      </>
   );
}
