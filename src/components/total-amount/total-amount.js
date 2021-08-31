import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { BurgerConstructorContext } from '../../services/constructorContext';

// Компонент с итоговой суммой заказа
function TotalAmount({ total }) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState(null);
    const ingredients = React.useContext(BurgerConstructorContext).map((item) => item._id)

    // Открытие модального окна. Получение номера заказа от API
    function handleModalOpen() {
        fetch(`https://norma.nomoreparties.space/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "ingredients": ingredients
            })
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            setOrderNumber(data.order.number);
            setModalOpen(true);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    function handleModalClose() {
        setModalOpen(false);
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
            { modalOpen && 
            <Modal onClose={ handleModalClose }>
                <OrderDetails id={ orderNumber } />
            </Modal> }
        </>
    )
}

// Пропсы компонента
TotalAmount.propTypes = {
    total: PropTypes.number.isRequired
}

export default TotalAmount;