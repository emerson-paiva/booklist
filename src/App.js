import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookInfoPage from './pages/BookInfoPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/book/:id' exact component={BookInfoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
