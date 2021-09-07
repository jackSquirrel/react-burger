import { ADD_INGREDIENT, DELETE_INGREDIENT } from '../actions/constructorIngredients';

const initialState = {
    mainIngredients: [],
    bun: {}
}

export function constructorIngredientsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state, 
                mainIngredients: [
                    ...state.mainIngredients,
                    action.item
                ]
            }
        case DELETE_INGREDIENT:
            return {
                ...state, 
                mainIngredients: state.mainIngredients.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
}