import { CHANGE_TO_DARK_MOOD, CHANGE_TO_LIGHT_MOOD } from "../Actions/Actions";
import { ActionType } from "../Actions/ActionsTypes";

export interface DarkMoodReducerType {
    isDark: boolean
}

export const DarkMoodReducer = (state: DarkMoodReducerType = { isDark: false }, action: ActionType): DarkMoodReducerType => {
    switch (action.type) {
        case CHANGE_TO_DARK_MOOD:
            return { isDark: true };
        case CHANGE_TO_LIGHT_MOOD:
            return { isDark: false };
        default:
            return state;
    }
}