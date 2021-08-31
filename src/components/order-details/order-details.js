import React from 'react';
import PropTypes from 'prop-types';

import '@ya.praktikum/react-developer-burger-ui-components';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-details.module.css';

// Компонент с содержимым модального окна с деталями заказа
function OrderDetails({ id }) {
    return (
        <div className={ styles.container }>
            <span className={`mt-30 text text_type_digits-large ${ styles.shadow }`}>{ id }</span>
            <span className="mt-8 text text_type_main-medium">идентификатор заказа</span>
            <div className={`mt-15 ${ styles.checkmark }`}>
                <CheckMarkIcon type="primary" />
            </div>
            <span className="mt-15 text text_type_main-default">Ваш заказ начали готовить</span>
            <span className="mt-2 mb-30 text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</span>
        </div>
    )
}

// Пропсы компонента
OrderDetails.propTypes = {
    id: PropTypes.number.isRequired
}

export default OrderDetails;