import React from 'react';

import { ingredientPropTypes } from '../../propTypes/propTypes';
import styles from './burger-ingredients-item.module.css';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

// Компонент карточки ингридиента
function BurgerIngredientItem(props) {
    return (
        <div className={`mb-8 ${ styles.container }`}>
            <Counter count={1} size="default" />
            <img alt={props.data.name} src={props.data.image} className="ml-4 mr-4" />
            <div className={`mt-2 mb-2 ${ styles.price }`}>
                <p className="text text_type_digits-default mr-2">{props.data.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default ${ styles.title }`}>{ props.data.name }</p>
        </div>
    )
}

// PropTypes компонента
BurgerIngredientItem.protTypes = {
    data: ingredientPropTypes.isRequired
}

export default BurgerIngredientItem;