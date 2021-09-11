import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './tabs.module.css';
import { SET_ACTIVE_TAB } from '../../services/actions/ingredients';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

// ТАБЫ ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ ГРУППАМИ ИНГРЕДИЕНТОВ
function Tabs() {
    const { current } = useSelector(store => ({ current: store.ingredients.activeTab }));
    const dispatch = useDispatch();

    function setCurrent(tab) {
      dispatch({ type: SET_ACTIVE_TAB, tab });
    }

    return (
        <div style={{ display: 'flex' }}>
          <a className={ styles.link } href="#buns"><Tab value="buns" active={current === 'buns'} onClick={() => setCurrent('buns')}>
            Булки
          </Tab></a>
          <a className={ styles.link } href="#sauces"><Tab value="sauces" active={current === 'sauces'} onClick={() => setCurrent('sauces')}>
            Соусы
          </Tab></a>
          <a className={ styles.link } href="#main"><Tab value="main" active={current === 'main'} onClick={() => setCurrent('main')}>
            Начинки
          </Tab></a>
        </div>
      )
}

export default Tabs;