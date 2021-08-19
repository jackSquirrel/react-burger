import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

// Так будут в сторе хранится выбранные ингридиенты (но, это не точно)
import { dataConstructor } from '../../utils/data-constructor';
// Временно пока пока нет API
import { dataIngredients } from '../../utils/data-ingredients';

function App() {
    return (
        <div className={ styles.app }>
            <AppHeader />
            <main style={{ display:'flex', gap:40 }}>
                <BurgerIngredients data={dataIngredients}/>
                <BurgerConstructor data={dataConstructor}/>
            </main>
        </div>
    );
}

export default App;