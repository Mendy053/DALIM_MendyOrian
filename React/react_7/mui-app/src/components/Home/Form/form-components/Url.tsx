import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type urlProps = {
    url: string,
    setUrl: Dispatch<SetStateAction<string>>;
};

export default function Url({ url, setUrl }: urlProps) {
    return (
        <TextField value={url} onChange={e => setUrl(e.target.value)} label="URL" required fullWidth />
    );
}