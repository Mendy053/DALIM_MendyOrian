import { Dispatch, SetStateAction, useEffect } from "react";
import { HeaderType } from "..";
import { Box, Button, FormLabel, Stack, TextField } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NewLineKind } from "typescript";

type HeadersProps = {
    headers: HeaderType[],
    setHeaders: Dispatch<SetStateAction<HeaderType[]>>;
};

export default function Headers({ headers, setHeaders }: HeadersProps) {
    const addHeader = () => {
        setHeaders([...headers, {
            key: "",
            value: ""
        }]);
    };

    return (
        <Stack style={{marginTop: "3rem"}} spacing={2}>
            <FormLabel title="Headers">Headers:</FormLabel>
            {headers.map(header => (
                <Stack width="100%" key={Date.now()}>
                    <TextField size="small" label="Key" />
                    <TextField multiline size="small" label="Value" />
                </Stack>
            ))}
            <Button onClick={addHeader} className="add-header-button" variant="text" size="small" style={{ fontSize: "2rem" }}><AddCircleOutlineIcon /></Button>
        </Stack>
    );
}