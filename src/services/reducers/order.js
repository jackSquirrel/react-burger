import { GET_ORDER } from '../actions/order';

const initialState = {
    orderNumber: null
}

export function orderReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ORDER:
            return { ...state, orderNumber: action.order }
        default:
            return state
    }
}