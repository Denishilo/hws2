type InitialStateType = {
    themeId: number
}

const initState: InitialStateType = {
    themeId: 1,
}

type ChangeThemeACType = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state = initState, action: ChangeThemeACType): InitialStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeACType => ({type: 'SET_THEME_ID', id}) as const // fix any

