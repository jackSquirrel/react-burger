import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import { Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import HeaderItem from '../app-header-item/app-header-item';
import HeaderNavList from '../app-header-nav/app-header-nav';

import styles from './app-header.module.css';

// AppHeader
function AppHeader() {
    return (
        <header className={ styles.header }>
            <div className={ `mt-4 mb-4 ${styles.container}` }>
                <HeaderNavList />

                <div className={ styles.logo }>
                    <Logo />
                </div>

                <HeaderItem 
                    link="#"
                    text="Личный кабинет"
                    textClasses="text text_type_main-default text_color_inactive"
                >
                    <ProfileIcon type="secondary" />
                </HeaderItem>
            </div>
        </header>
    )
}

export default AppHeader;