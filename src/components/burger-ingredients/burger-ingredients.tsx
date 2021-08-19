import React from 'react';
import PropTypes from 'prop-types';

import { ingredientPropTypes } from '../../propTypes/propTypes';
import Tabs from '../tabs/tabs';
import BurgerIngredientGroup from '../burger-ingredients-group/burger-ingredients-group';
import styles from './burger-ingredients.module.css';

import '@ya.praktikum/react-developer-burger-ui-components';

// Компонент выбора ингредиентов
function BurgerIngredients(props: any) {
    return (
        <section className={styles.section }>
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
            <Tabs />
            <div className={`mt-10 ${ styles.container }`}>
                <BurgerIngredientGroup title="Булки" items={props.data.filter((item: any) => item.type === 'bun')}/>
                <BurgerIngredientGroup title="Соусы" items={props.data.filter((item: any) => item.type === 'sauce')}/>
                <BurgerIngredientGroup title="Начинки" items={props.data.filter((item: any) => item.type === 'main')}/>
            </div>
        </section>
    )
}

// PropTypes компонента
BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropTypes)
}

export default BurgerIngredients;