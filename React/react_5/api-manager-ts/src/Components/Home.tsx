import { FormEvent } from "react";
import { useNewRequest } from "../contexts/NewRequest";
import Method from "./NewRequestForm/Method";
import Url from "./NewRequestForm/Url";
import Body from "./NewRequestForm/Body";
import { json } from "react-router";

export default function Home() {
  const { method, setMethod, body, setBody, url, setUrl, result, setResult }: any = useNewRequest();

  interface Options {
    method: string,
    headers: {
      [key: string]: string;
    },
    body?: string;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const options: Options = {
      method: method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    if (method === "POST" || method === "PUT") { options.body = body; }

    fetch(url, options).then(res => res.json()).then(data => {
      setResult(JSON.stringify(data));
    });

    const newToLocalStorage = {
      method: method,
      body: body,
      url: url
    };
    if (localStorage.getItem("requests") == undefined) {
      localStorage.requests = JSON.stringify([newToLocalStorage]);
    } else {
      console.log(localStorage.requests);
      localStorage.requests = JSON.stringify([...JSON.parse(localStorage.requests), newToLocalStorage]);
    }

    setBody("");
    setUrl("");
    setMethod("");
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <Method />
        <Url />
        <Body />
        <button >Submit</button>
      </form>

      <p>{result}</p>
    </>
  );
}
