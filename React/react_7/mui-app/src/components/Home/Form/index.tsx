import { Button, Stack } from "@mui/material";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Method from "./form-components/Method";
import { MethodsOptionsType } from "../../../ModelsAndConstants";
import Url from "./form-components/Url";
import Body from "./form-components/Body";
import { useFetchResult } from "../../../contexts/FetchResults";
import Headers from "./form-components/Headers";

type FetchOptions = {
    method: MethodsOptionsType,
    body?: string;
};

type FormProps = {
    url: string,
    setUrl: Dispatch<SetStateAction<string>>;
};

export type HeaderType = {
    key: string,
    value: string;
};

export default function Form({ url, setUrl }: FormProps) {
    const [method, setMethod] = useState<MethodsOptionsType>("GET");
    const [body, setBody] = useState<string>("");
    const [headers, setHeaders] = useState<HeaderType[]>([]);
    const { setFetchResult } = useFetchResult();

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        const options: FetchOptions = {
            method: method
        };
        if (method === "POST" || method === "PUT") options.body = body;

        fetch(url, options).then(res => res.json()).then(data => {
            setFetchResult(JSON.stringify(data));
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Stack width="30vw" spacing={2}>
                <Method method={method} setMethod={setMethod} />
                <Url url={url} setUrl={setUrl} />
                <Body method={method} body={body} setBody={setBody} />
                <Headers headers={headers} setHeaders={setHeaders} />
                <Button type="submit" variant="contained" >Fetch</Button>
            </Stack >
        </form>
    );
};