import { CLOSE_MODAL, OPEN_DETAILS_MODAL, OPEN_ORDER_MODAL } from '../actions/modal';

const initialState = {
    isOrderModalOpen: false,
    isDetailsModalOpen: false
}

export function modalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_ORDER_MODAL:
            return {
                ...state,
                isOrderModalOpen: true
            }
        case OPEN_DETAILS_MODAL:
            return {
                ...state,
                isDetailsModalOpen: true
            }
        case CLOSE_MODAL:
            return {
                ...initialState
            }
        default:
            return state
    }
}