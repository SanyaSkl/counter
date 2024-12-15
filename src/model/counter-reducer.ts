const initialState = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    errorMessage: "",
    disabledInc: false,
    disableReset: true
}

const INCREMENT = 'INCREMENT'
const RESET = 'RESET'
const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

export const counterReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1,
                disableReset: false
            }
        }
        case RESET: {
            return {
                ...state,
                count: state.startValue,
                disableReset: true
            }
        }
        case UPDATE_SETTINGS: {
            return {
                ...state,
                maxValue: action.payload.maxValue,
                startValue: action.payload.startValue,
                count: action.payload.startValue,
                errorMessage: ''
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
        default:
            return state
    }
}

export const incrementAC = () => ({type: INCREMENT} as const)
export const resetAC = () => ({type: RESET} as const)
export const updateSettingsAC = (payload: { maxValue: number, startValue: number }) => ({
    type: UPDATE_SETTINGS,
    payload
} as const)
export const setErrorMessageAC = (payload: string) => ({
    type: SET_ERROR_MESSAGE,
    payload
} as const)

export type IncrementActionType = ReturnType<typeof incrementAC>
export type ResetActionType = ReturnType<typeof resetAC>
export type UpdateSettingsActionType = ReturnType<typeof updateSettingsAC>
export type SetErrorMessageActionType = ReturnType<typeof setErrorMessageAC>

type ActionsType =
    | IncrementActionType
    | ResetActionType
    | UpdateSettingsActionType
    | SetErrorMessageActionType

