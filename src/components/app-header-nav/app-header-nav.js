import React from 'react';

import styles from './app-header-nav.module.css';
import HeaderItem from '../app-header-item/app-header-item';

import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';


// Навигационное меню в Header'е
function HeaderNavList() {
    return (
        <nav>
            <ul>
                <li className={ styles.nav__item }>
                    <HeaderItem 
                        link="#"
                        text="Конструктор"
                        textClasses="text text_type_main-default"
                    >
                        <BurgerIcon type="primary" />
                    </HeaderItem>
                </li>
                <li className={ styles.nav__item }>
                    <HeaderItem 
                        link="#"
                        text="Лента заказов"
                        textClasses="text text_type_main-default text_color_inactive"
                    >
                        <ListIcon type="secondary" />
                    </HeaderItem>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNavList;