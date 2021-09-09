import React from 'react';
import { useSelector } from 'react-redux';

import styles from './ingredient-details.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';

// Компонент с содержимым о деталях ингридиента
function IngredientDetails() {
    const details = useSelector(store => store.ingredientDetails.ingredient);

    return (
        <div>
            <span className={`text text_type_main-large mt-10 ${ styles.title }`}>Детали ингредиента</span>
            <div className={`mb-15 ${ styles.container }`}>
                <img className={ styles.image } src={ details.image_large } alt={ details.name } />
                <span className="text text_type_main-medium mt-4">{ details.name }</span>
                <div className={`mt-8 text text_type_main-default text_color_inactive ${ styles.nutrition__container }`}>
                    <div className={ styles.nutrition__item }>
                        <p>Калории,ккал</p>
                        <p className="mt-2">{ details.calories }</p>
                    </div>
                    <div className={ styles.nutrition__item }>
                        <p>Белки, г</p>
                        <p className="mt-2">{ details.proteins }</p>
                    </div>
                    <div className={ styles.nutrition__item }>
                        <p>Жиры, г</p>
                        <p className="mt-2">{ details.fat }</p>
                    </div>
                    <div className={ styles.nutrition__item }>
                        <p>Углеводы, г</p>
                        <p className="mt-2">{ details.carbohydrates }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;