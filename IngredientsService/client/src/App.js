import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import store from './redux/store';
import ModalRoot from './context/ModalRoot';
import Header from './sharedComponents/Header/HeaderContainer';
import Page from './pages/Index/IndexPageContainer';
import Ingredients from './pages/Ingredients/IngredientsPage';
import PrivateRoute from './sharedComponents/PrivateRoute/PrivateRoute';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ModalProvider>
        <ModalRoot />
        <Header />
        <Switch>
          <Route path="/" exact component={Page} />
          <PrivateRoute path="/ingredients" exact component={Ingredients} />
        </Switch>
      </ModalProvider>
    </BrowserRouter>
  </Provider>
);
export default App;
