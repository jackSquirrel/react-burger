import React from 'react';

import styles from './burger-constructor.module.css';
import TotalAmount from '../total-amount/total-amount';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

// Компонент конструктора бургера
function BurgerConstructor(props: any) {
    const bun = props.data.bun;
    const main = props.data.main;
    return (
        <section className={`pr-4 ${ styles.section }`}>
            <div className={`mt-25 mb-10 ml-4 ${ styles.constructor__container }`}>
                {/* Открывающая булочка */}
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
                {/* Основная часть, которую можно изменять (пока что нельзя) */}
                <div className={`${ styles.constructor__scroll }`}>
                    { main.map((item: any, index: number) => {
                        return (
                            <div key={index} className={`mr-2 ${ styles.constructor__item }`}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image}
                                />
                            </div>
                        )
                    }) }
                </div>
                {/* Закрывающая булочка */}
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>
            <TotalAmount total="630"/>
        </section>
    )
}

export default BurgerConstructor;