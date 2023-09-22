import { Stack } from "@mui/material";
import Form from "./Form";
import { FetchResultProvider } from "../../contexts/FetchResults";
import Result from "./Result";
import { useState } from "react";

export default function Home() {
    const [url, setUrl] = useState<string>("");

    return (
        <>
            <Stack p={5} width={3}>
                <FetchResultProvider>
                    <Form url={url} setUrl={setUrl} />
                    <Result url={url} />
                </FetchResultProvider>
            </Stack>
        </>
    );
}