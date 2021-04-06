// https://github.com/hogeschoolnovi/frontend-react-recipe-app

import React from 'react';
import { recipes } from './assets/recipes';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Button from './components/button/Button';
import './App.css';

function App() {
  return (
    <div className="page-container">
     <Header />
      <Button>Ga naar EdHub</Button>
      <div className="recipe-container">
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
