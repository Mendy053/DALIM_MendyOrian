const today = new Date();
const nextTowDays = new Date(today);
nextTowDays.setDate(today.getDate() + 2);
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
export const MyDate = {
    NEXT_TOW_DAYS: nextTowDays,
    TOMORROW: tomorrow
}
