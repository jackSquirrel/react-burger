import React from 'react';
import PropTypes from 'prop-types';

import styles from './burger-ingredients-item.module.css';
import { useDrag } from 'react-dnd';
import { ingredientPropTypes } from '../../propTypes/propTypes';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

// КОМПОНЕНТ ИНГРЕДИЕНТА
function BurgerIngredientItem({ onOpen, data }) {
    const [, drag] = useDrag({
        type: 'ingredient',
        item: { data }
    });

    return (
        <>
            <div ref={ drag } className={`mb-8 ${ styles.container }`} onClick={ () => onOpen(data) }>
                { data.counter ? <Counter count={data.counter} size="default" /> : null }
                <img alt={ data.name } src={ data.image } className="ml-4 mr-4" />
                <div className={`mt-2 mb-2 ${ styles.price }`}>
                    <p className="text text_type_digits-default mr-2">{ data.price }</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-default ${ styles.title }`}>{ data.name }</p>
            </div>
        </>
    )
}

// PropTypes компонента
BurgerIngredientItem.protTypes = {
    data: ingredientPropTypes.isRequired,
    onOpen: PropTypes.func.isRequired
}

export default BurgerIngredientItem;