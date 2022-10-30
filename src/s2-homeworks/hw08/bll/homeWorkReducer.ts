import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    const copyState = [...state]
    switch (action.type) {
        case 'sort': {
            return copyState.sort((a, b) => action.payload === 'up' ? a.name > b.name ? 1 : -1 : b.name > a.name ? 1 : -1)
        }
        case 'check': {
            return state.filter(el => el.age > 18)
        }
        default:
            return state
    }
}
