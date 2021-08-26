import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

// Так будут в сторе хранится выбранные ингридиенты (но, это не точно)
import { dataConstructor } from '../../utils/data-constructor';
// Временно пока пока нет API
// import { dataIngredients } from '../../utils/data-ingredients';

const apiUrl = 'https://norma.nomoreparties.space';

function App() {
    const [ingredients, setIngredients] = React.useState([]);
    // const [modalOpen, setModalOpen] = React.useState(false);

    // Возможно, стоит заменить на одну функцию. Но это не точно...

    // function handleModalClose() {
    //     this.setModalOpen(false);
    // }

    // function handleModalOpen() {
    //     this.setModalOpen(true);
    // }

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