import { CHANGE_TO_DARK_MOOD, CHANGE_TO_LIGHT_MOOD } from "./Actions"

interface ChangeToDarkMoodType {
    type: typeof CHANGE_TO_DARK_MOOD
}

interface ChangeToLightMoodType {
    type: typeof CHANGE_TO_LIGHT_MOOD
}
export type ActionType = ChangeToDarkMoodType | ChangeToLightMoodType

export const changeTODarkMood = (): ChangeToDarkMoodType => {
    return {
        type: CHANGE_TO_DARK_MOOD
    }
}

export const changeToLightMood = (): ChangeToLightMoodType => {
    return {
        type: CHANGE_TO_LIGHT_MOOD
    }
}