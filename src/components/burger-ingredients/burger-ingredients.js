import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './burger-ingredients.module.css';
import BurgerIngredientGroup from '../burger-ingredients-group/burger-ingredients-group';
import Tabs from '../tabs/tabs';
import { SET_ACTIVE_TAB } from '../../services/actions/ingredients';
import '@ya.praktikum/react-developer-burger-ui-components';

// КОМПОНЕНТ ВЫБОРА ИНГРЕДИЕНТОВ
function BurgerIngredients() {
    const { ingredients, activeTab } = useSelector(store => ({
        ingredients: store.ingredients.items,
        activeTab: store.ingredients.activeTab
    }));
    const dispatch = useDispatch();

    // Рефы для посчета расстояния до верха страницы
    const containerRef = useRef(null);
    const bunsRef = useRef(null);
    const saucesRef = useRef(null);
    const mainRef = useRef(null);

    // Расстояние от верха контейнера до верха страницы
    const distFromContainerToTop = containerRef.current ? containerRef.current.getBoundingClientRect() : null;

    // При прокрутке проверяем какая группа ингредиентов ближе к верху контейнера
    // и выделяем активный таб
    function handleScroll() {
        // Расстояния от верха блоков до верха контейнера
        const distFromBunsToParentTop = Math.abs(bunsRef.current.getBoundingClientRect().top - distFromContainerToTop.top);
        const distFromSaucesToParentTop = Math.abs(saucesRef.current.getBoundingClientRect().top - distFromContainerToTop.top);
        const distFromMainToParentTop = Math.abs(mainRef.current.getBoundingClientRect().top - distFromContainerToTop.top);

        if (distFromBunsToParentTop <= distFromSaucesToParentTop) {
            if (activeTab !== 'buns') {
                dispatch({ type: SET_ACTIVE_TAB, tab: 'buns' })
            }
        } else if (distFromSaucesToParentTop <= distFromMainToParentTop) {
            if (activeTab !== 'sauces') {
                dispatch({ type: SET_ACTIVE_TAB, tab: 'sauces' })
            }
        } else {
            if (activeTab !== 'main') {
                dispatch({ type: SET_ACTIVE_TAB, tab: 'main' })
            }
        }
    }

    return (
        <section className={ styles.section }>
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
            <Tabs />
            <div ref={ containerRef } className={`mt-10 ${ styles.container }`} onScroll={ handleScroll }>
                <BurgerIngredientGroup ref={ bunsRef } title="Булки" items={ingredients.filter((item) => item.type === 'bun')}/>
                <BurgerIngredientGroup ref={ saucesRef } title="Соусы" items={ingredients.filter((item) => item.type === 'sauce')}/>
                <BurgerIngredientGroup ref={ mainRef } title="Начинки" items={ingredients.filter((item) => item.type === 'main')}/>
            </div>
        </section>
    )
}

export default BurgerIngredients;