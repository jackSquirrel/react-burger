import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function Tabs() {
    const [current, setCurrent] = React.useState('one')
    return (
        <div style={{ display: 'flex' }}>
          <div style={{ flexGrow:1 }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
              Булки
            </Tab>
          </div>
          <div style={{ flexGrow:1 }}>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
              Соусы
            </Tab>
          </div>
          <div style={{ flexGrow:1 }}>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
              Начинки
            </Tab>
          </div>
        </div>
      )
}

export default Tabs;