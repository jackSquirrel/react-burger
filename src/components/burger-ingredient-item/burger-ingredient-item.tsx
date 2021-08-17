import React from 'react';

import styles from './burger-ingredient-item.module.css';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredientItem(props: any) {
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

export default BurgerIngredientItem;