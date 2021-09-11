import { apiUrl } from '../api';
import { OPEN_ORDER_MODAL } from './modal';

export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';


export function getOrder(ingredients) {
    return function(dispatch) {
        dispatch({ type: GET_ORDER_REQUEST });

        fetch(`${apiUrl}/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "ingredients": ingredients
            })
        })
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`);
            })
            .then(data => {
                if(data.success) {
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        order: data.order.number
                    })
                    dispatch({
                        type: OPEN_ORDER_MODAL
                    })
                } else {
                    return Promise.reject(data.message);
                }
            })
            .catch(error => {
                dispatch({
                    type: GET_ORDER_ERROR,
                    error
                })
            })
    }
}