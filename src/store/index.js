export const initialState = {
    number: 0,
    cart: [],
    products: [],
    user: null,
}

export function reducer(state, action) {
    switch(action.type) {
        case 'add2':
            return {...state, number: state.number + 2}
        case 'mult7':
            return {...state, number: state.number * 7}
        case 'div25':
            return {...state, number: state.number / 25}
        case 'int':
            return {...state, number: parseInt(state.number)}
        case 'login':
            return {...state, user: {name: action.payload}}
        case 'n':
            return {...state, number: state.number + action.payload}
        default:
            return state
    }
}