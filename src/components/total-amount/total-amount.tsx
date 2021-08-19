import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

// Компонент с итоговой суммой заказа
function TotalAmount(props: any) {
    return (
        <div style={{ display:'flex' }}>
            <div style={{ display:'flex', alignItems:'center' }} className="mr-10">
                <span className="text text_type_digits-medium mr-2">{props.total}</span>
                <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
    )
}

TotalAmount.propTypes = {
    total: PropTypes.number.isRequired
}

export default TotalAmount;