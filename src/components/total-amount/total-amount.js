import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { getOrder } from '../../services/actions/order';
import { CLOSE_MODAL } from '../../services/actions/modal';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

// КОМПОНЕНТ С ИТОГОВОЙ СУММОЙ ЗАКАЗА
function TotalAmount() {
    const dispatch = useDispatch();

    const isOrderModalOpen = useSelector(store => store.modal.isOrderModalOpen)
    const { total, ingredients } = useSelector(store => ({
        total: store.constructorIngredients.total,
        ingredients: [...store.constructorIngredients.mainIngredients, 
                        store.constructorIngredients.bun].map(item => item._id)
    }))

    // Открытие модального окна c номером заказа от API
    function handleModalOpen() {
        dispatch(getOrder(ingredients));
    }

    // Закрытие модального окна
    function handleModalClose() {
        dispatch({ type: CLOSE_MODAL });
    }

    return (
        <>
            <div style={{ display:'flex' }}>
                <div style={{ display:'flex', alignItems:'center' }} className="mr-10">
                    <span className="text text_type_digits-medium mr-2">{ total }</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={ handleModalOpen }>
                    Оформить заказ
                </Button>
            </div>
            { isOrderModalOpen && 
            <Modal onClose={ handleModalClose }>
                <OrderDetails />
            </Modal> }
        </>
    )
}

export default TotalAmount;