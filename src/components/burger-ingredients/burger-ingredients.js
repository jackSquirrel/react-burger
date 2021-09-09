import React from 'react';
import { useSelector } from 'react-redux';

import Tabs from '../tabs/tabs';
import BurgerIngredientGroup from '../burger-ingredients-group/burger-ingredients-group';
import styles from './burger-ingredients.module.css';

import '@ya.praktikum/react-developer-burger-ui-components';

// Компонент выбора ингредиентов
function BurgerIngredients() {
    const ingredients = useSelector(store => store.ingredients.items);

    return (
        <section className={styles.section }>
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
            <Tabs />
            <div className={`mt-10 ${ styles.container }`}>
                <BurgerIngredientGroup title="Булки" items={ingredients.filter((item) => item.type === 'bun')}/>
                <BurgerIngredientGroup title="Соусы" items={ingredients.filter((item) => item.type === 'sauce')}/>
                <BurgerIngredientGroup title="Начинки" items={ingredients.filter((item) => item.type === 'main')}/>
            </div>
        </section>
    )
}

export default BurgerIngredients;