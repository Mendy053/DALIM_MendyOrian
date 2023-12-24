import { IconButton, Paper, Stack } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { GetAllThisMonthObjects, GetDateFormatForObject, GetHebMonthAndYear, GetHebrewMonth, GetWeekNumber } from "../../Helpers/Date/DateHelpers";
import { useEffect, useState } from "react";
import { HebrewDateFullObjectType } from "../../Types and Interfaces/Dates";

const PaperStyle: React.CSSProperties = {
    height: "20rem",
    width: "19rem",
    padding: "1rem"
};

const CalendarHeaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
};

const Calendar: React.FC = () => {
    const [pickedDate, setPickedDate] = useState<Date>(new Date());
    const [allMonthObjects, setAllMonthObjects] = useState<HebrewDateFullObjectType[]>(GetAllThisMonthObjects(pickedDate));

    const GoToPreviousMonth = () => {
        setPickedDate(new Date(pickedDate.setMonth(pickedDate.getMonth() - 1)));
    };

    const GoToNextMonth = () => {
        setPickedDate(new Date(pickedDate.setMonth(pickedDate.getMonth() + 1)));
    };

    useEffect(() => {
        setAllMonthObjects(GetAllThisMonthObjects(pickedDate));
    }, [GetHebrewMonth(pickedDate)]);

    const WeeksNumbers = (): number[] => {
        const allWeeks: number[] = [];
        allMonthObjects.forEach((date) => {
            if (!allWeeks.includes(GetWeekNumber(GetDateFormatForObject(date)))) {
                allWeeks.push(GetWeekNumber(GetDateFormatForObject(date)));
            }
        });

        return (allWeeks);
    };

    return (
        <>
            <Stack>
                <Paper style={PaperStyle}>
                    <div id="calendar-header" style={CalendarHeaderStyle}>
                        <IconButton onClick={GoToPreviousMonth}><ChevronRightIcon /></IconButton>
                        <span>{GetHebMonthAndYear(pickedDate)}</span>
                        <IconButton onClick={GoToNextMonth}><ChevronLeftIcon /></IconButton>
                    </div>
                    <div id="calendar-body">
                        {WeeksNumbers().map((weekNumber) => {
                            return <div key={weekNumber} className="calendar-row"></div>;
                        })}
                    </div>
                </Paper>
            </Stack>
        </>
    );
};

export default Calendar;