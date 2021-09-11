import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SET_ACTIVE_TAB,
    INCREASE_COUNTER,
    DECREASE_COUNTER
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
        case INCREASE_COUNTER:
            return {
                ...state, 
                items: state.items.map((item) => item._id === action.id ? 
                                                { ...item, counter: item.counter + 1 }
                                                : item)
            }
        case DECREASE_COUNTER:
            return {
                ...state, 
                items: state.items.map((item) => item._id === action.id ? 
                                                { ...item, counter: item.counter - 1 }
                                                : item)
            }
        default:
            return state;
    }
}