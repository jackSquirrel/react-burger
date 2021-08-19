import React from 'react';
import PropTypes from 'prop-types';

import BurgerIngredientItem from '../burger-ingredients-item/burger-ingredients-item';
import styles from './burger-ingredients-group.module.css';

import '@ya.praktikum/react-developer-burger-ui-components';

// Компонент группы ингредиентов 
function BurgerIngredientGroup(props: any) {
    return (
        <div className="mb-2">
            <p className="text text_type_main-medium mb-6">{ props.title }</p>
            <div className={`pl-4 pr-4 ${ styles.container }`}>
                { props.items.map((item: any) => <BurgerIngredientItem key={item._id} data={item}/>) }
            </div>
        </div>
        )
    }
    
const itemsPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
})

BurgerIngredientGroup.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(itemsPropTypes.isRequired)
}

export default BurgerIngredientGroup;