import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <AppHeader />
                <main>
                    
                </main>
            </div>
        );
    }
}

export default App;