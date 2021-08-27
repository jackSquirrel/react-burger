import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

// Захардкоженные данные для BurgerConstrunctor, пока нет данных о выбранных 
// пользователем ингредиентов
import { dataConstructor } from '../../utils/data-constructor';

// Временно пока пока нет API
// import { dataIngredients } from '../../utils/data-ingredients';

// Url API
const apiUrl = 'https://norma.nomoreparties.space';

function App() {
    const [ingredients, setIngredients] = React.useState([]);

    React.useEffect(() => {
        fetch(`${apiUrl}/api/ingredients`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setIngredients(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className={ styles.app }>
            <AppHeader />
            <main style={{ display:'flex', gap:40 }}>
                <BurgerIngredients data={ ingredients } />
                <BurgerConstructor data={ dataConstructor } />
            </main>
        </div>
    );
}

export default App;