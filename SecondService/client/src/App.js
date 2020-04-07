import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import ModalRoot from './context/ModalRoot';
import Header from './sharedComponents/Header/Header';
import Page from './pages/Index/IndexPage';
import Ingredients from './pages/Ingredients/IngredientsPage';

const App = () => (
  <BrowserRouter>
    <ModalProvider>
      <ModalRoot />
      <Header />
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="/ingredients" exact component={Ingredients} />
      </Switch>
    </ModalProvider>
  </BrowserRouter>
);
export default App;