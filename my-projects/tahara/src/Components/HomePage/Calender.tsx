import { IconButton, Paper, Stack } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { GetAllThisMonthObjects, GetDateFormatForObject, GetHebDayObject, GetHebMonthAndYear, GetHebrewMonth, GetNextHebMonth, GetPreviousHebMonth, GetWeekNumber } from "../../Helpers/Date/DateHelpers";
import { useEffect, useState } from "react";
import { HebrewDateFullObjectType } from "../../Types and Interfaces/Dates";
import { OnaType } from "../../Types and Interfaces/Ona";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const PaperStyle: React.CSSProperties = {
    height: "fit-content",
    maxHeight: "fit-content",
    width: "22rem",
    padding: ".6rem"
};

const CalendarHeaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
};

interface CalendarProps {
    isOnaNeeded: boolean;
}

const Calendar: React.FC<CalendarProps> = ({ isOnaNeeded = true }) => {
    const [pickedDate, setPickedDate] = useState<Date>(new Date());
    const [allMonthObjects, setAllMonthObjects] = useState<HebrewDateFullObjectType[]>(GetAllThisMonthObjects(pickedDate));
    const [ona, setOna] = useState<OnaType>("night");

    const GoToPreviousMonth = () => {
        setPickedDate(GetDateFormatForObject(GetPreviousHebMonth(pickedDate)));
    };

    const GoToNextMonth = () => {
        setPickedDate(GetDateFormatForObject(GetNextHebMonth(pickedDate)));
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
                            <thead>
                                <tr className="calendar-row days-in-week">
                                    <td className="calendar-day day-in-week">א</td>
                                    <td className="calendar-day day-in-week">ב</td>
                                    <td className="calendar-day day-in-week">ג</td>
                                    <td className="calendar-day day-in-week">ד</td>
                                    <td className="calendar-day day-in-week">ה</td>
                                    <td className="calendar-day day-in-week">ו</td>
                                    <td className="calendar-day day-in-week">ז</td>
                                </tr>
                                <tr id="calendar-divider">
                                    <td colSpan={7}></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    HebDatesOrderedByWeeks().map((week, i, allArray) => {
                                        return (
                                            <tr key={week.weekNumber} className={`calendar-row${i === 0 ? " first" : i === (allArray.length - 1) ? " last" : ""}`}>
                                                {i === 0 && Array.from({ length: 7 - week.dateObjects.length }, (_, i) => {
                                                    return <td className="calendar-day" key={i}></td>;
                                                })}

                                                {week.dateObjects.map((date) => {
                                                    return <td onClick={() => setPickedDate(GetDateFormatForObject(date))} key={GetDateFormatForObject(date).toDateString()} className={`calendar-day${date.hebrew === GetHebDayObject(pickedDate).hebrew && ' calendar-date-picked'}`}><IconButton className={`${!isOnaNeeded || GetHebDayObject(pickedDate).hebrew !== date.hebrew ? "" : ona === "day" ? " ona-left" : " ona-right"}`} size="small">{date.heDateParts.d.replaceAll("״", "").replaceAll("׳", "")}</IconButton></td>;
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
                        {
                            isOnaNeeded &&
                            <div>
                                <IconButton onClick={() => setOna(ona === "day" ? "night" : "day")} id="ona-button" style={{ width: "3rem", height: "3rem", backgroundColor: ona === "day" ? "white" : "gray" }}>{ona === "night" ? <Brightness3Icon /> : <WbSunnyIcon />}</IconButton>
                            </div>
                        }
                    </div>
                </Paper>
            </Stack>
            <div>

            </div>
        </>
    );
};

export default Calendar;