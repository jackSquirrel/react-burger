import { ADD_TO_CONSTRUCTOR, DELETE_FROM_CONSTRUCTOR, SET_SORTED_INGREDIENTS } from '../actions/constructorIngredients';

const initialState = {
    mainIngredients: [],
    bun: {},
    total: 0
}

export function constructorIngredientsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CONSTRUCTOR:
            return {
                bun: action.item.type === 'bun' ? action.item : state.bun,
                mainIngredients: action.item.type === 'bun' ? [...state.mainIngredients] : [
                    ...state.mainIngredients,
                    action.item
                ],
                total: action.item.type === 'bun' ? state.total + action.item.price * 2 : state.total + action.item.price
            }
        case DELETE_FROM_CONSTRUCTOR:
            return {
                ...state, 
                // total: state.total - 
                mainIngredients: state.mainIngredients.filter(item => item._id !== action.id),
            }
        case SET_SORTED_INGREDIENTS:
            const dragIngredient = state.mainIngredients[action.dragId];
            const sortedIngredients = [...state.mainIngredients];
            sortedIngredients.splice(action.dragId, 1);
            sortedIngredients.splice(action.hoverId, 0, dragIngredient);
            return {
                ...state,
                mainIngredients: sortedIngredients
            }
        default:
            return state
    }
}