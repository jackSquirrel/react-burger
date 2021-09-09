import React from 'react';
// import PropTypes from 'prop-types';s

import styles from './burger-constructor.module.css';
import TotalAmount from '../total-amount/total-amount';
// import { ingredientPropTypes } from '../../propTypes/propTypes';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorContext } from '../../services/constructorContext';

// Компонент конструктора бургера
function BurgerConstructor() {
    const ingredients = React.useContext(BurgerConstructorContext);

    const bun = ingredients.length ? ingredients.find((item) => item.type === 'bun') : null;
    const main = ingredients.length ? ingredients.filter((item) => item.type !== 'bun') : [];

    // Подсчет итоговой стоимости 
    function getTotalAmount(bun, main) {
        let summ = 0;
        if (bun) {
            summ += bun.price * 2;
        }
        main.forEach(item => summ += item.price)
        return summ;
    }

    return (
        <section className={`pr-4 ${ styles.section }`}>

            <div className={`mt-25 mb-10 ml-4 ${ styles.constructor__container }`}>
                {/* Открывающая булочка */}
                { bun && <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                /> }
                {/* Основная часть, которую можно изменять (пока что нельзя) */}
                { main.length ? 
                <div className={ styles.constructor__scroll }>
                    { main.map((item) => {
                        return (
                            <div key={item._id} className={`mr-2 ${ styles.constructor__item }`}>
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
                : null }
                {/* Закрывающая булочка */}
                { bun && <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                /> }
            </div>

            <TotalAmount total={ getTotalAmount(bun, main) } />
        </section>
    )
}

// PropTypes компонента
// BurgerConstructor.propTypes = {
//     data: PropTypes.shape({
//         bun: ingredientPropTypes,
//         main: PropTypes.arrayOf(ingredientPropTypes).isRequired
//     })
// }

export default BurgerConstructor;