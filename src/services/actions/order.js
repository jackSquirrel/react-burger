import { apiUrl } from '../api';

export const GET_ORDER = 'GET_ORDER';

export function getOrder(ingredients) {
    return function(dispatch) {
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
                dispatch({
                    type: GET_ORDER,
                    order: data.order.number
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}