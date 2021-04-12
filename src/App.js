import React from 'react';
import {recipes} from './assets/recipes';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Button from './components/button/Button';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles['page-container']}>
            <Header/>
            <Button>Ga naar EdHub</Button>
            <div className={styles['recipe-container']}>
                {recipes.map((recipe) => {
                    return (
                        <Card
                            key={recipe.title}
                            img={recipe.image}
                            title={recipe.title}
                            duration={recipe.minutes}
                            highlight={recipe.highlighted}
                        />
                    )
                })}
            </div>
            <Button type="outline">Bekijk meer recepten</Button>
        </div>
    );
}

export default App;
