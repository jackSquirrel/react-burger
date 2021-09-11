import React, { useRef } from 'react';

import styles from './burger-constructor-item.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { DELETE_FROM_CONSTRUCTOR, SET_SORTED_INGREDIENTS } from '../../services/actions/constructorIngredients';
import { useDrag, useDrop } from 'react-dnd';
import { DECREASE_COUNTER } from '../../services/actions/ingredients';

function BurgerConstructorItem ({ item, index }) {
    const { _id, name, price, image, uniqueId } = item;

    const ref = useRef(null);
    const dispatch = useDispatch();

    const [, drop] = useDrop({
        accept: 'internalIngredients',
        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }
            const dragId = item.index;
            const hoverId = index;
            if (dragId === hoverId) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragId < hoverId && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragId > hoverId && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch({ type: SET_SORTED_INGREDIENTS, dragId, hoverId });

            item.index = hoverId;
        }
    })

    const [ {isDragging} , drag ] = useDrag({
        type: 'internalIngredients',
        item: () => {
            return { id: uniqueId, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })

    })
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    // Удаление ингредиента
    function onCloseHandler(uniqueId, id) {
        dispatch({ type: DELETE_FROM_CONSTRUCTOR, id: uniqueId, price });
        dispatch({ type: DECREASE_COUNTER, id })
    }

    return (
        <div ref={ ref } className={`mr-2 ${ styles.constructor__item }`} style={{opacity}}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
                handleClose={ () => onCloseHandler(uniqueId, _id) }
            />
        </div>
    )
}

export default BurgerConstructorItem;