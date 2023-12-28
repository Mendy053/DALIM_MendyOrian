import { HebrewDateFullObjectType } from '../../Types and Interfaces/Dates';
import HebDates from "./HebrewDates.json";

const allDates: HebrewDateFullObjectType[] = Array.isArray(HebDates) ? HebDates : [];

export function GetHebDayObject(date: Date = new Date()): HebrewDateFullObjectType {
    return allDates.filter((hebDate) => {
        if (hebDate.gy === date.getFullYear() && hebDate.gm === (date.getMonth() + 1) && hebDate.gd === date.getDate()) {
            return hebDate;
        }
    })[0];
}

export function GetHebrewMonth(date: Date): string {
    return GetHebDayObject(date).heDateParts.m;
}

export function GetHebrewYear(date: Date): string {
    return GetHebDayObject(date).heDateParts.y;
}

export function GetHebrewDate(date: Date): string {
    return GetHebDayObject(date).heDateParts.d;
}

export function GetPreviousHebMonth(date: Date): HebrewDateFullObjectType {
    const indexOf = allDates.indexOf(GetHebDayObject(date));
    for (let i = (indexOf - 27); i > (indexOf - 32); i--) {
        if ((GetHebrewDate(date) === "ל׳" && (allDates[i].heDateParts.d == "ל׳" || allDates[i].heDateParts.d == "כ״ט"))
            || GetHebrewDate(date) === allDates[i].heDateParts.d) {
            return allDates[i];
        }
    }
    return GetHebDayObject(date);
}

export function GetNextHebMonth(date: Date): HebrewDateFullObjectType {
    const indexOf = allDates.indexOf(GetHebDayObject(date));
    for (let i = (indexOf + 32); i > (indexOf + 27); i--) {
        if ((GetHebrewDate(date) === "ל׳" && (allDates[i].heDateParts.d == "ל׳" || allDates[i].heDateParts.d == "כ״ט"))
            || GetHebrewDate(date) === allDates[i].heDateParts.d) {
            return allDates[i];
        }
    }
    return GetHebDayObject(date);
}

export function GetDateFormatForObject(hebObject: HebrewDateFullObjectType): Date {
    return new Date(hebObject.gy, hebObject.gm - 1, hebObject.gd);
}

export function GetHebMonthAndYear(date: Date): string {
    return GetHebrewMonth(date) + " " + GetHebrewYear(date);
}

export function GetAllThisMonthObjects(date: Date = new Date()): HebrewDateFullObjectType[] {
    const dateFromParameter = GetHebDayObject(date);

    return allDates.filter((dateFromArray) => {
        if (dateFromArray.hy === dateFromParameter.hy && dateFromArray.hm === dateFromParameter.hm) {
            return dateFromArray;
        }
    });
}

export function GetWeekNumber(date: Date): number {
    const startOfWeek = new Date(date.getFullYear(), 0, 4); // January 4th
    startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() || 7)); // Adjust to the start of the week

    const diffInDays = Math.floor((date.getTime() - startOfWeek.getTime()) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((diffInDays + 1) / 7);

    return weekNumber;
}
