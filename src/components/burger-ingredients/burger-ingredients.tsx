import React from 'react';

import Tabs from '../tabs/tabs';
import BurgerIngredientGroup from '../burger-ingredient-group/burger-ingredient-group';
import { data } from '../../utils/data'; // Временно пока пока нет API
import styles from './burger-ingredients.module.css';

import '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
    return (
        <section style={{maxWidth: 600}}>
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
            <Tabs />
            <div className={`mt-10 ${ styles.container }`}>
                <BurgerIngredientGroup title="Булки" items={data.filter((item) => item.type === 'bun')}/>
                <BurgerIngredientGroup title="Соусы" items={data.filter((item) => item.type === 'sauce')}/>
                <BurgerIngredientGroup title="Начинки" items={data.filter((item) => item.type === 'main')}/>
            </div>
        </section>
    )
}

export default BurgerIngredients;