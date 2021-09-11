import { apiUrl } from '../api';
import { ADD_TO_CONSTRUCTOR } from './constructorIngredients';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

export function getIngredients() {
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        
        fetch(`${apiUrl}/api/ingredients`)
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`)
            })
            .then(data => {
                if(data.success) {
                    const items = data.data.map((item)=>({ ...item, counter: 0 }));
                    const firstBun = items.find((item) => item.type === 'bun');
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        items
                    })
                    dispatch({
                        type: ADD_TO_CONSTRUCTOR,
                        item: firstBun
                    })
                    dispatch({
                        type: INCREASE_COUNTER,
                        id: firstBun._id
                    })
                } else {
                    return Promise.reject(`Ошибка ${data.success}`)
                }
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
            })
    }
}