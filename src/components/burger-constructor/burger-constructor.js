import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import uuid from 'react-uuid';

import styles from './burger-constructor.module.css';
import TotalAmount from '../total-amount/total-amount';
import { ADD_TO_CONSTRUCTOR } from '../../services/actions/constructorIngredients';
import { DECREASE_COUNTER, INCREASE_COUNTER } from '../../services/actions/ingredients';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

// КОНСТРУКТОР БУРГЕРОВ
function BurgerConstructor() {
    const dispatch = useDispatch();
    const { bun, main } = useSelector(store => ({
        bun: store.constructorIngredients.bun,
        main: store.constructorIngredients.mainIngredients
    }))

    const [, drop] = useDrop({
        accept: 'ingredient',
        drop(item) {
            const newItem = item.data;
            if (bun._id === newItem._id) {
                return;
            }
            newItem.uniqueId = uuid();
            onDropHandler(newItem);
        },
    });

    function onDropHandler(item) {
        if (item.type === 'bun' && Object.keys(bun).length) {
            dispatch({ type: DECREASE_COUNTER, id: bun._id })
        }
        dispatch({ type: ADD_TO_CONSTRUCTOR, item });
        dispatch({ type: INCREASE_COUNTER, id: item._id });
    }

    return (
        <section className={`pr-4 ${ styles.section }`}>

            <div ref={drop} className={`mt-25 mb-10 ml-4 ${ styles.constructor__container }`}>
                {/* Открывающая булочка */}
                { Object.keys(bun).length ? <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                /> : null }

                {/* Основная часть, которую можно изменять (пока что нельзя) */}
                <div className={ `${main.length > 5 ? styles.constructor__scroll : ''} ${styles.constructor__main}`}>
                    { main.map((item, index) => <BurgerConstructorItem 
                                            key={item.uniqueId} 
                                            item={item}
                                            index={index}
                                        />)}
                </div>

                {/* Закрывающая булочка */}
                { Object.keys(bun).length ? <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                /> : null }
            </div>

            <TotalAmount />
        </section>
    )
}

export default BurgerConstructor;