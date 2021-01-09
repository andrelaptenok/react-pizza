import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Cart } from './pages';

export const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
};
