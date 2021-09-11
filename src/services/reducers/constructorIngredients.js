import { ADD_TO_CONSTRUCTOR, DELETE_FROM_CONSTRUCTOR } from '../actions/constructorIngredients';

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
                mainIngredients: state.mainIngredients.filter(item => item._id !== action.id),
                // total: state.total - 
            }
        default:
            return state
    }
}