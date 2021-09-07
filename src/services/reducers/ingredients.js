import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED
} from '../actions/ingredients';

const initialState = {
    items: [],
    itemsFaild: false,
    itemsRequest: false
};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            console.log('Идет загрузка...');
            return { ...state, itemsRequest: true };
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state, itemsRequest: false, items: action.items
            }
        case GET_INGREDIENTS_FAILED:
            return {
                ...state, itemsRequest: false, itemsFaild: true
            }
        default:
            return state;
    }
}