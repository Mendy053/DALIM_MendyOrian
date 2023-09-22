import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { MethodsOptionsType } from "../../../../ModelsAndConstants";

type bodyProps = {
    method: MethodsOptionsType,
    body: string,
    setBody: Dispatch<SetStateAction<string>>;
};

export default function Body({ method, body, setBody }: bodyProps) {
    return (
        <>
            {(method === "POST" || method == "PUT")
                &&
                <TextField multiline value={body} onChange={e => setBody(e.target.value)} label="Body" required fullWidth></TextField>}
        </>
    );
}