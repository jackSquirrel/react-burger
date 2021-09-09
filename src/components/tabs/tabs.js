import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';

function Tabs() {
    const [current, setCurrent] = React.useState('one')
    return (
        <div style={{ display: 'flex' }}>
          <a class={ styles.link } href="#buns"><Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab></a>
          <a class={ styles.link } href="#sauces"><Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab></a>
          <a class={ styles.link } href="#main"><Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab></a>
        </div>
      )
}

export default Tabs;