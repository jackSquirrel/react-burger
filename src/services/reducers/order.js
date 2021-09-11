import { GET_ORDER_SUCCESS, GET_ORDER_REQUEST, GET_ORDER_ERROR } from '../actions/order';

const initialState = {
    orderNumber: null
}

export function orderReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ORDER_SUCCESS:
            return { ...state, orderNumber: action.order }
        case GET_ORDER_REQUEST:
            console.log('Идет загрузка номера заказа... Тут тоже мог быть loader...');
            return initialState
        case GET_ORDER_ERROR:
            console.log(action.errors);
            return initialState
        default:
            return state
    }
}