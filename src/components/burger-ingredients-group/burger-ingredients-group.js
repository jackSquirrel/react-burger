import React from 'react';
import PropTypes from 'prop-types';

import BurgerIngredientItem from '../burger-ingredients-item/burger-ingredients-item';
import styles from './burger-ingredients-group.module.css';
import { ingredientPropTypes } from '../../propTypes/propTypes';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

import '@ya.praktikum/react-developer-burger-ui-components';

// Компонент группы ингредиентов 
function BurgerIngredientGroup(props) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalData, setModalData] = React.useState({});

    function handleModalClose() {
        setModalOpen(false);
        setModalData({});
    }

    function handleModalOpen(data) {
        setModalOpen(true);
        setModalData(data);
    }

    return (
        <>
            <div className="mb-2">
                <p className="text text_type_main-medium mb-6">{ props.title }</p>
                <div className={`pl-4 pr-4 ${ styles.container }`}>
                    { props.items.map((item) => <BurgerIngredientItem 
                                                    onOpen={ handleModalOpen } 
                                                    key={item._id} 
                                                    data={item}
                                                />) 
                    }
                </div>
            </div>
            { modalOpen && <Modal onClose={ handleModalClose }><IngredientDetails {...modalData} /></Modal> } 
        </>
        )
    }

// PropTypes для компонента 
BurgerIngredientGroup.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(ingredientPropTypes.isRequired)
}

export default BurgerIngredientGroup;