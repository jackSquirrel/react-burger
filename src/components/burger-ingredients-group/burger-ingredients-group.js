import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import BurgerIngredientItem from '../burger-ingredients-item/burger-ingredients-item';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from './burger-ingredients-group.module.css';
import Modal from '../modal/modal';
import { ingredientPropTypes } from '../../propTypes/propTypes';
import { ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from '../../services/actions/ingredientDetails';
import { CLOSE_MODAL, OPEN_DETAILS_MODAL } from '../../services/actions/modal';
import '@ya.praktikum/react-developer-burger-ui-components';

// КОМПОНЕНТ ГРУППЫ ИНГРЕДИЕНТОВ 
const BurgerIngredientGroup = React.forwardRef((props, ref) => {
    const isDetailsModalOpen = useSelector(store => store.modal.isDetailsModalOpen);
    const dispatch = useDispatch();

    // Закрытие модального окна с деталями об ингредиенте
    function handleModalClose() {
        dispatch({ type: CLOSE_MODAL });
        dispatch({ type: DELETE_INGREDIENT_DETAILS });
    }

    // Открытие модального окна с деталями
    function handleModalOpen(data) {
        dispatch({
            type: ADD_INGREDIENT_DETAILS,
            item: data
        });
        dispatch({ type: OPEN_DETAILS_MODAL });
    }

    return (
        <>
            <div className="mb-2" ref={ref}>
                <p 
                    id={ props.title === 'Соусы' ? 'sauces' : props.title === 'Булки' ? 'buns' : 'main'} 
                    className="text text_type_main-medium mb-6"
                >
                        { props.title }
                </p>
                <div className={`pl-4 pr-4 ${ styles.container }`}>
                    { props.items.map((item) => <BurgerIngredientItem 
                                                    onOpen={ handleModalOpen } 
                                                    key={item._id} 
                                                    data={item}
                                                />) 
                    }
                </div>
            </div>
            { isDetailsModalOpen && <Modal onClose={ handleModalClose }><IngredientDetails /></Modal> } 
        </>
        )
    }
)
// PropTypes для компонента 
BurgerIngredientGroup.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(ingredientPropTypes.isRequired)
}

export default BurgerIngredientGroup;