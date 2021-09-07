import { ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from '../actions/ingredientDetails';

const initialState = {
    ingredient: {}
}

export function ingredientDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_INGREDIENT_DETAILS: 
            return {
                ingredient: action.item
            }
        case DELETE_INGREDIENT_DETAILS:
            return {
                ingredient: {}
            }
        default:
            return state;
    }
}