import { Box, Button } from "@mui/material";
import { EventType } from "../../Types and Interfaces/Event";
import { OnaType } from "../../Types and Interfaces/Ona";
import { HebrewDateFullObjectType } from "../../Types and Interfaces/Dates";

interface AddEventProps {
    lastEvent: EventType;
}

export interface EventObject {
    ona: OnaType,
    hebDate: HebrewDateFullObjectType,
    eventType: EventType
}

const AddEvent: React.FC<AddEventProps> = ({ lastEvent }) => {
    const addEventFunction = () => {

    };

    return (
        <>
            <Box marginTop={3}>
                <Button onClick={addEventFunction} variant="contained" color={lastEvent === "H.T." ? "error" : "success"} size="medium">{lastEvent === "H.T." ? `הוסף וסת` : `הוסף ה.ט.`}</Button>
            </Box>
        </>
    );
};

export default AddEvent;