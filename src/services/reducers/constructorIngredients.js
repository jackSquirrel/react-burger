import { ADD_TO_CONSTRUCTOR, DELETE_FROM_CONSTRUCTOR, SET_SORTED_INGREDIENTS } from '../actions/constructorIngredients';

const initialState = {
    mainIngredients: [],
    bun: {},
    total: 0
}

export function constructorIngredientsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CONSTRUCTOR:
            if (action.item.type === 'bun') {
                let total;
                if (Object.keys(state.bun).length) {
                    total = state.total - state.bun.price*2 + action.item.price*2
                } else {
                    total = state.total + action.item.price*2
                }
                return {
                    ...state,
                    bun: action.item,
                    total
                }
            }
            return {
                ...state,
                mainIngredients: [ ...state.mainIngredients, action.item ],
                total: state.total + action.item.price
            }
        case DELETE_FROM_CONSTRUCTOR:
            return {
                ...state, 
                total: state.total - action.price,
                mainIngredients: state.mainIngredients.filter(item => item.uniqueId !== action.id),
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