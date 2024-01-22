import { ReactNode, createContext } from "react";
import { GetHebDayObject } from "../Helpers/Date/DateHelpers";
import { EventObject } from "../Components/HomePage/AddEvent";

export const DatePicked = createContext<EventObject | null>(null);

export const DatePickedProvider: React.FC<ReactNode> = (props: ReactNode) => {
    return (
        <DatePicked.Provider value={
            {
                hebDate: GetHebDayObject(new Date()),
                ona: "day",
                eventType: "H.T."last
            }
        }>
            {props}
        </DatePicked.Provider>
    );
};

export function GetDatePicked;