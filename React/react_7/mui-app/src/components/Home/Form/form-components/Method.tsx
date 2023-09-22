import { Dispatch, SetStateAction } from "react";
import { MenuItem, TextField } from "@mui/material";
import { MethodsOptions, MethodsOptionsType } from "../../../../ModelsAndConstants";

type MethodProps = {
    method: MethodsOptionsType,
    setMethod: Dispatch<SetStateAction<MethodsOptionsType>>;
};

export default function Method({ method, setMethod }: MethodProps) {
    return (
        <>
            <TextField required value={method} label="Method" onChange={e=>setMethod(e.target.value as MethodsOptionsType)} select style={{width: "10rem"}}>
                {MethodsOptions.map(option => {
                    return <MenuItem value={option} key={option}>{option}</MenuItem>
                })}
            </TextField>
        </>
    );
}