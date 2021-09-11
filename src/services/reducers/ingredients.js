import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SET_ACTIVE_TAB
} from '../actions/ingredients';

const initialState = {
    items: [],
    itemsFaild: false,
    itemsRequest: false,
    activeTab: 'buns'
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
        case SET_ACTIVE_TAB:
            return {
                ...state, activeTab: action.tab
            }
        default:
            return state;
    }
}