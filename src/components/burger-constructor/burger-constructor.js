import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import styles from './burger-constructor.module.css';
import TotalAmount from '../total-amount/total-amount';

import { useDrop } from "react-dnd";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ADD_TO_CONSTRUCTOR, DELETE_FROM_CONSTRUCTOR } from '../../services/actions/constructorIngredients';
import { INCREASE_COUNTER } from '../../services/actions/ingredients';

// Компонент конструктора бургера
function BurgerConstructor() {
    const dispatch = useDispatch();
    const { total, bun, main } = useSelector(store => ({
        total: store.constructorIngredients.total,
        bun: store.constructorIngredients.bun,
        main: store.constructorIngredients.mainIngredients
    }))

    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item) {
            onDropHandler(item.data);
        },
    });

    function onDropHandler(item) {
        dispatch({ type: ADD_TO_CONSTRUCTOR, item });
        dispatch({ type: INCREASE_COUNTER, id: item._id });
    }

    function onCloseHandler(id) {
        dispatch({ type: DELETE_FROM_CONSTRUCTOR, id })
    }

    return (
        <section className={`pr-4 ${ styles.section }`}>

            <div ref={dropTarget} className={`mt-25 mb-10 ml-4 ${ styles.constructor__container }`}>
                {/* Открывающая булочка */}
                { Object.keys(bun).length ? <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                /> : null }
                {/* Основная часть, которую можно изменять (пока что нельзя) */}
                <div className={ styles.constructor__scroll }>
                    { main.map((item) => {
                        return (
                            <div key={item._id} className={`mr-2 ${ styles.constructor__item }`}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image}
                                    handleClose={ () => onCloseHandler(item._id) }
                                />
                            </div>
                        )
                    }) }
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

            <TotalAmount total={ total } />
        </section>
    )
}

export default BurgerConstructor;