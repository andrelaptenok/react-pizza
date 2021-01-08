import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Cart } from './pages';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
};
