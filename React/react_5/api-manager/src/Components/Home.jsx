import { useState } from "react";
import { useNewRequest } from "../Contexts/NewRequest";
import Select from "./Select";
import URLInput from "./URLInput";
import Body from "./Body";

export default function Home() {
  const { method, setMethod, url, setUrl, body, setBody } = useNewRequest();
  const [result, setResult] = useState("");

  function onSubmit() {
    let options = { method: method };
    if (method === "POST" || method === "PUT") { options.body = body; }
    fetch(url, options).then(res => res.json()).then(res => setResult(JSON.stringify(res)));
    setMethod("");
    setBody("");
    setUrl("");
  }
  return <>

    <Select />
    <URLInput />
    <Body />
    <button onClick={onSubmit}>Show Results</button>
    <p>{result}</p>
  </>;
}
