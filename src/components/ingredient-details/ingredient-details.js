import React from 'react';

import styles from './ingredient-details.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';

function IngredientDetails(props) {
    return (
        <div>
            {/* Вынести заголовок ???? */}
            <span className={`text text_type_main-large mt-10 ${ styles.title }`}>Детали ингредиента</span>
            <div className={`mb-15 ${ styles.container }`}>
                <img src={ props.image_large } alt={ props.name } />
                <span className="text text_type_main-medium mt-4">{ props.name }</span>
                <div className={`mt-8 text text_type_main-default text_color_inactive ${ styles.nutrition__container }`}>
                    <div className={ styles.nutrition__item }>
                        <p>Калории,ккал</p>
                        <p className="mt-2">{ props.calories }</p>
                    </div>
                    <div className={ styles.nutrition__item }>
                        <p>Белки, г</p>
                        <p className="mt-2">{ props.proteins }</p>
                    </div>
                    <div className={ styles.nutrition__item }>
                        <p>Жиры, г</p>
                        <p className="mt-2">{ props.fat }</p>
                    </div>
                    <div className={ styles.nutrition__item }>
                        <p>Углеводы, г</p>
                        <p className="mt-2">{ props.carbohydrates }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;