import { Divider, IconButton, Paper, Stack } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { GetAllThisMonthObjects, GetDateFormatForObject, GetHebMonthAndYear, GetHebrewMonth, GetWeekNumber } from "../../Helpers/Date/DateHelpers";
import { useEffect, useState } from "react";
import { HebrewDateFullObjectType } from "../../Types and Interfaces/Dates";

const PaperStyle: React.CSSProperties = {
    height: "fit-content",
    maxHeight: "fit-content",
    width: "19rem",
    padding: ".6rem"
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

    const HebDatesOrderedByWeeks = (): { weekNumber: number, dateObjects: HebrewDateFullObjectType[]; }[] => {
        const Data: { weekNumber: number, dateObjects: HebrewDateFullObjectType[]; }[] = [];

        allMonthObjects.forEach(date => {
            const weekNumberFoeIteratedDate: number = GetWeekNumber(GetDateFormatForObject(date));
            if (Data.length === 0 || Data[Data.length - 1].weekNumber !== weekNumberFoeIteratedDate
                && !(Data.length > 1 && Data[Data.length - 1].dateObjects.length < 7)) {
                Data.push(
                    {
                        weekNumber: weekNumberFoeIteratedDate,
                        dateObjects: [date]
                    }
                );
            }
            else {
                Data[Data.length - 1].dateObjects.push(date);
            }
        });

        return Data;
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
                        <table>
                            <tbody>

                                <tr className="calendar-row days-in-week">
                                    <td className="calendar-day day-in-week">א</td>
                                    <td className="calendar-day day-in-week">ב</td>
                                    <td className="calendar-day day-in-week">ג</td>
                                    <td className="calendar-day day-in-week">ד</td>
                                    <td className="calendar-day day-in-week">ה</td>
                                    <td className="calendar-day day-in-week">ו</td>
                                    <td className="calendar-day day-in-week">ז</td>
                                </tr>
                                <Divider sx={{ my: 0.5, mb: 1 }} />

                                {
                                    HebDatesOrderedByWeeks().map((week, i, allArray) => {
                                        return (
                                            <tr key={week.weekNumber} className={`calendar-row${i === 0 ? " first" : i === (allArray.length - 1) ? " last" : ""}`}>
                                                {i === 0 && Array.from({ length: 7 - week.dateObjects.length }, (_, i) => {
                                                    return <td className="calendar-day" key={i}></td>;
                                                })}

                                                {week.dateObjects.map((date) => {
                                                    return <td key={GetDateFormatForObject(date).toDateString()} className="calendar-day"><IconButton size="small">{date.heDateParts.d}</IconButton></td>;
                                                })}

                                                {(i === allArray.length - 1) && Array.from({ length: 7 - week.dateObjects.length }, (_, i) => {
                                                    return <td className="calendar-day" key={i}></td>;
                                                })}
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </Paper>
            </Stack>
        </>
    );
};

export default Calendar;