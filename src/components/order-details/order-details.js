import React from 'react';
import { useSelector } from 'react-redux';

import styles from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import '@ya.praktikum/react-developer-burger-ui-components';

// СОДЕРЖИМОЕ МОДАЛЬНОГО ОКНА С ДЕТАЛЯМИ ЗАКАЗА
function OrderDetails() {
    const orderNumber = useSelector(store => store.order.orderNumber)

    return (
        <div className={ styles.container }>
            <span className={`mt-30 text text_type_digits-large ${ styles.shadow }`}>{ orderNumber }</span>
            <span className="mt-8 text text_type_main-medium">идентификатор заказа</span>
            <div className={`mt-15 ${ styles.checkmark }`}>
                <CheckMarkIcon type="primary" />
            </div>
            <span className="mt-15 text text_type_main-default">Ваш заказ начали готовить</span>
            <span className="mt-2 mb-30 text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</span>
        </div>
    )
}

export default OrderDetails;