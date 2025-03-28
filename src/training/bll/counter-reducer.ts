

const initialState = {
    value: 0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC_VALUE':
            return {
                ...state, value: state.value + 1
            }
        case 'SET_VALUE_TO_LS':
            return {
                ...state, value: action.value
            }
        default:
            return state
    }
}


export const incValueAC = () => ({type: 'INC_VALUE'} as const)
export const setValueToLocalStorageAC = (value: number) => ({type: 'SET_VALUE_TO_LS', value} as const)

export type IncValueActionType = ReturnType<typeof incValueAC>
export type SetValueToLocalStorageActionType = ReturnType<typeof setValueToLocalStorageAC>

type ActionType = IncValueActionType | SetValueToLocalStorageActionType


