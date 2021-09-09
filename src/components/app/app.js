import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../services/actions/ingredients';

// Захардкоженные данные для BurgerConstrunctor, пока нет данных о выбранных 
// пользователем ингредиентов
// import { dataConstructor } from '../../utils/data-constructor';

// Временно пока пока нет API
// import { dataIngredients } from '../../utils/data-ingredients';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch])

    return (
        <div className={ styles.app }>
            <AppHeader />
            <main style={{ display:'flex', gap:40 }}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </div>
    );
}

export default App;