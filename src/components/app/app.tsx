import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <AppHeader />
                <main>
                    <BurgerIngredients />
                </main>
            </div>
        );
    }
}

export default App;