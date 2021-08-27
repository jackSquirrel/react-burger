import React from 'react';

import { ingredientPropTypes } from '../../propTypes/propTypes';
import styles from './burger-ingredients-item.module.css';
import withModal from '../hocs/withModal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

// Компонент карточки ингридиента
function BurgerIngredientItem({ data }) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const WithModalIngredientDetails = withModal({ handleModalClose, ...data })(IngredientDetails);

    function handleModalOpen() {
        setModalOpen(true);
    }

    function handleModalClose() {
        setModalOpen(false);
    }

    return (
        <>
            <div className={`mb-8 ${ styles.container }`} onClick={ handleModalOpen }>
                <Counter count={1} size="default" />
                <img alt={data.name} src={data.image} className="ml-4 mr-4" />
                <div className={`mt-2 mb-2 ${ styles.price }`}>
                    <p className="text text_type_digits-default mr-2">{data.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-default ${ styles.title }`}>{ data.name }</p>
            </div>
            { modalOpen && <WithModalIngredientDetails /> }
        </>
    )
}

// PropTypes компонента
BurgerIngredientItem.protTypes = {
    data: ingredientPropTypes.isRequired
}

export default BurgerIngredientItem;