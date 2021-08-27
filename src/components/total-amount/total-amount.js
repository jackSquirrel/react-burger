import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import withModal from '../hocs/withModal';

// Компонент с итоговой суммой заказа
function TotalAmount({ total }) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const WithModalOrderDetails = withModal({ handleModalToggle, id: '12345' })(OrderDetails);

    function handleModalToggle(e) {
        setModalOpen(!modalOpen);
    }

    return (
        <>
            <div style={{ display:'flex' }}>
                <div style={{ display:'flex', alignItems:'center' }} className="mr-10">
                    <span className="text text_type_digits-medium mr-2">{ total }</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={ handleModalToggle }>
                    Оформить заказ
                </Button>
            </div>
            { modalOpen && <WithModalOrderDetails />}
        </>
    )
}

// Пропсы компонента
TotalAmount.propTypes = {
    total: PropTypes.number.isRequired
}

export default TotalAmount;