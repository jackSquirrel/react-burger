import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

function AppHeader() {
    return (
        <header className={ styles.header }>
            <div className={ `mt-4 mb-4 ${styles.container}` }>
                <nav>
                    <ul className="nav__list">
                        <li className={styles.nav__item}>
                            <a href="#" className={ styles.link }>
                                <div style={{ display: 'flex' }} className="pt-4 pb-4 pr-5 pl-5">
                                    <BurgerIcon type="primary" />
                                    <p className={`text text_type_main-default ${styles.text}`}>Конструктор</p>
                                </div>
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#" className={ styles.link }>
                                <div style={{ display: 'flex' }} className="pt-4 pb-4 pr-5 pl-5">
                                    <ListIcon type="secondary" />
                                    <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>Лента заказов</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <a href="#" className={ styles.link }>
                    <div style={{ display: 'flex' }} className="pt-4 pl-5 pb-4 pr-4">
                        <ProfileIcon type="secondary" />
                        <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>Личный кабинет</p>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default AppHeader;