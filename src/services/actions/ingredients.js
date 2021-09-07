import { apiUrl } from '../api';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

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
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        items: data.data
                    })
                }
                return Promise.reject(`Ошибка ${data.success}`)
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
            })
    }
}