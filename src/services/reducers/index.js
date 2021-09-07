import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { ingredientDetailsReducer } from './ingredientDetails';
import { orderReducer } from './order';
import { constructorIngredientsReducer } from './constructorIngredients';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorIngredients: constructorIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer
});