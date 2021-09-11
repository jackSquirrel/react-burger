import { apiUrl } from '../api';

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
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        items
                    })
                } else {
                    return Promise.reject(data.message);
                }
            })
            .catch(error => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                    error
                })
            })
    }
}