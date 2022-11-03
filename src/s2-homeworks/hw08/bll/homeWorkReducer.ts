import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    const copyState = [...state]
    switch (action.type) {
        case 'sort': {
            copyState.sort((a, b) => {
                if(a.name > b.name){
                    return 1
                } else if(a.name<b.name){
                    return -1
                }else {
                    return 0
                }
            })
            return action.payload === 'up' ? copyState : copyState.reverse()
        }
        case 'check': {
            return state.filter(el => el.age > 18)
        }
        default:
            return state
    }
}
